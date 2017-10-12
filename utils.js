const config = require('./config');

let redis = require('redis').createClient(config.redis.endpoint, {no_ready_check: true});

const getOrCreateUser = (userId, callback) => {
  redis.get(userId, (err, reply) => {
    let user;
    if (err) {
      logger.log('error', err);
    } else {
      if (reply === null) {
        user = { level: 2 };
        redis.set(userId, JSON.stringify(user), 'EX', config.redis.expiration);
      } else {
        user = JSON.parse(reply);
      }
      callback(user);
    }
  });
};

module.exports = {
  getOrCreateUser
};
