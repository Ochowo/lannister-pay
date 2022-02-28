/* eslint-disable import/prefer-default-export */

import redisClient from '../redis';
import { parseRequest } from '../helpers';

export const createConfiguration = async (req, res) => {
  const { FeeConfigurationSpec } = req.body;
  const arr = await parseRequest(FeeConfigurationSpec);
  const data = JSON.stringify(arr);
  const dd = await redisClient.set('data', data);
  if (dd) {
    await redisClient.get('data');
    return res.send({ status: [dd, 'oo'] });
  }
  return res.send({ status: data });
};
