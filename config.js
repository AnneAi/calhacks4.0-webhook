const config = {
  port: process.env.PORT || 8080,
  redis: {
    endpoint: process.env.REDIS_URL || 'redis://127.0.0.1:6379/0',
    expiration: 60*30
  }
};

module.exports = config;
