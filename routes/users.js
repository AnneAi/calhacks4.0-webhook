const config = require('../config');

let users = { };

const getOrCreateUser = (userId) => {
  let user;
  if (!users[userId]) {
    user = { level: 2 };
    users[userId] = user;
  } else {
    user = users[userId];
  }

  return user;
};

module.exports = {
  getOrCreateUser
};
