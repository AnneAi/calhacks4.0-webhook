const db = require('../database');

let users = { };

const getOrCreateUser = id => {
  if (!users[id]) {
    users[id] = {
      level: 2
    }
  }
  return users[id];
};

const webhook = (req, res) => {
  let userId = req.body.sessionId;
  let user = getOrCreateUser(userId);

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
        answer: exercise.answer
      };
    } else {
      followupEvent.name = 'fallback';
    }
  } else if (action === 'getVideo') {
    if (db[context.parameters.skill]) {
      followupEvent.name = 'video';
      followupEvent.data = {
        platform: db[context.parameters.skill]['videos'][0].platform,
        id: db[context.parameters.skill]['videos'][0].id
      };
    } else {
      followupEvent.name = 'fallback';
    }
  }

  res.json({
    contextOut: [ context ],
    followupEvent
  });
};

module.exports = webhook;
