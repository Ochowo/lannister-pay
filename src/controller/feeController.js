/* eslint-disable import/prefer-default-export */

import redisClient from '../redis';

export const testConnection = async (req, res) => {
  const dd = await redisClient.set('data', 'data');
  if (dd) {
    await redisClient.get('"data"');
    return res.send({ status: [dd] });
  }
  return res.send({ status: ' data' });
};
