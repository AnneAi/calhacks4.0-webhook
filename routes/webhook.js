const db = require('../database');
const utils = require('../utils');

const webhook = (req, res) => {
  let userId = req.body.sessionId;
  utils.getOrCreateUser(userId, user => {
    let action = req.body.result.action;
    let parameters = req.body.result.parameters;
    let context = req.body.result.contexts.find(c => c.name === 'context');
    let followupEvent = { data: { } };

    if (action === 'getDescription') {
      context.parameters.skill = parameters.skill;
      if (db[context.parameters.skill]) {
        followupEvent.name = 'definition';
        followupEvent.data = {
          definition: db[context.parameters.skill]['definitions'][0].definition
        };
      } else {
        followupEvent.name = 'fallback';
      }
    } else if (action === 'getExercise') {
      if (db[context.parameters.skill]) {
        let levelExercises = db[context.parameters.skill]['exercises'].filter( ex => ex.level === user.level);
        let exercise = levelExercises[Math.floor(Math.random() * levelExercises.length)];
        followupEvent.name = 'exercise';
        followupEvent.data = {
          wording: exercise.wording,
          choices: exercise.choices.join(','),
          answer: exercise.answer,
          explanation: exercise.explanation
        };
      } else {
        followupEvent.name = 'fallback';
      }
    } else if (action === 'getVideo') {
      if (db[context.parameters.skill]) {
        let videos = db[context.parameters.skill]['videos'];
        let video = videos[Math.floor(Math.random() * videos.length)];
        followupEvent.name = 'video';
        followupEvent.data = {
          platform: video.platform,
          id: video.id
        };
      } else {
        followupEvent.name = 'fallback';
      }
    }

    res.json({
      contextOut: [ context ],
      followupEvent
    });
  });
};

module.exports = webhook;
