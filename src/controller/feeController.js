/* eslint-disable import/prefer-default-export */

import redisClient from '../redis';
import {
  parseRequest, feeConditionals, getValidIndex, calculateCharge,
} from '../helpers';

export const createConfiguration = async (req, res) => {
  const { FeeConfigurationSpec } = req.body;
  const arr = await parseRequest(FeeConfigurationSpec);
  const data = JSON.stringify(arr);
  redisClient.set('data', data);
  return res.send({ status: 'ok' });
};

export const computeTransactionFee = async (req, res) => {
  const {
    Amount, Customer,
  } = req.body;
  const {
    BearsFee,
  } = Customer;
  const arrFinal = [];
  let myObj;
  const data = await redisClient.get('data');
  if (data) {
    try {
      myObj = JSON.parse(data);
      if (myObj && myObj.length > 0) {
        try {
          const checkConfig = await feeConditionals(myObj, req.body, arrFinal);
          if (checkConfig !== false && checkConfig.errorArr.length > 0) {
            return res.status(404).send({ Error: checkConfig.error });
          }
        } catch {
          return res.status(400).send({ Error: 'An Error has occurred' });
        }
      }
      if (arrFinal.length === 0) {
        return res.status(404).send({ Error: 'No fee configuration for this transaction.' });
      }
      try {
        const validVal = await getValidIndex(arrFinal);
        const respObj = await calculateCharge(arrFinal, validVal, Amount, BearsFee);
        return res.send(respObj);
      } catch {
        return res.status(400).send({ Error: 'An Error has occurred' });
      }
    } catch (err) {
      return res.status(400).send({ Error: 'Error parsing json' });
    }
  } else {
    return res.status(400).send({ status: 'No saved configuration. Please create configuration' });
  }
};
