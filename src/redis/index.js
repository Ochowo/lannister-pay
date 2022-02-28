const redis = require('redis');

let redisClient;
if (process.env.REDISCLOUD_URL) {
  const redisURL = process.env.REDISCLOUD_URL;

  redisClient = redis.createClient({ url: redisURL });
} else {
  redisClient = redis.createClient();
}

(async () => {
  await redisClient.connect();
})();

redisClient.on('connect', () => console.log('::> Redis Client Connected'));
redisClient.on('error', (err) => console.log('<:: Redis Client Error', err));

module.exports = redisClient;
