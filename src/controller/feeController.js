/* eslint-disable import/prefer-default-export */

import redisClient from '../redis';
import { parseRequest } from '../helpers';

export const createConfiguration = async (req, res) => {
  const { FeeConfigurationSpec } = req.body;
  const arr = await parseRequest(FeeConfigurationSpec);
  const data = JSON.stringify(arr);
  redisClient.set('data', data);
  return res.send({ status: 'ok' });
};
