/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
export const parseRequest = async (reqString) => {
  const splittedString = reqString.split(/\r?\n/);
  const arr = [];
  for (let i = 0; i < splittedString.length; i++) {
    const config = splittedString[i];
    const configArray = config.split(' ');
    const reqObj = {
      feeId: configArray[0],
      feeCurrency: configArray[1],
      feeLocale: configArray[2],
      feeEntity: configArray[3].split('(')[0],
      feeEntityProperty: configArray[3].split('(')[1].split(')')[0],
      feeType: configArray[6],
      feeValue: configArray[7],
    };
    arr.push(reqObj);
  }
  return arr;
};

export const feeConditionals = async (fees, reqBody, arrFinal) => {
  let errorArr = [];
  let error = null;
  let errorObj = null;
  fees.filter((val) => {
    const {
      PaymentEntity, CurrencyCountry, Currency,
    } = reqBody;
    const {
      ID, Issuer, Brand, SixID, Type,
    } = PaymentEntity;
    const locale = PaymentEntity.Country === CurrencyCountry ? 'LOCL' : 'INTL';
    if (val.feeCurrency === Currency) {
      if (val.feeLocale === locale) {
        if (val.feeEntity === Type) {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else if (val.feeEntity === '*') {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else {
          error = `No fee configuration for ${Type} transactions`;
          if (arrFinal.length === 0) {
            errorArr.push(error);
          }
        }
      } else if (val.feeLocale === '*') {
        if (val.feeEntity === Type) {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else if (val.feeEntity === '*') {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else {
          error = `No fee configuration for ${Type} transactions`;
          if (arrFinal.length === 0) {
            errorArr.push(error);
          }
        }
      } else {
        error = `No fee configuration for ${locale} transactions`;
        if (arrFinal.length === 0) {
          errorArr.push(error);
        }
      }
    } else if (val.feeCurrency === '*') {
      if (val.feeLocale === locale) {
        if (val.feeEntity === Type) {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else if (val.feeEntity === '*') {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else {
          error = `No fee configuration for ${Type} transactions`;
          if (arrFinal.length === 0) {
            errorArr.push(error);
          }
        }
      } else if (val.feeLocale === '*') {
        if (val.feeEntity === Type) {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else if (val.feeEntity === '*') {
          if (val.feeEntityProperty === ID || val.feeEntityProperty === SixID
            || val.feeEntityProperty === PaymentEntity.Number
            || val.feeEntityProperty === Brand || val.feeEntityProperty === Issuer || val.feeEntityProperty === '*') {
            arrFinal.push(val);
            errorArr = [];
            return val;
          } else {
            error = 'No fee configuration for this entity property transactions';
            if (arrFinal.length === 0) {
              errorArr.push(error);
            }
          }
        } else {
          error = `No fee configuration for ${Type} transactions`;
          if (arrFinal.length === 0) {
            errorArr.push(error);
          }
        }
      } else {
        error = `No fee configuration for ${locale} transactions`;
        if (arrFinal.length === 0) {
          errorArr.push(error);
        }
      }
    } else {
      error = `No fee configuration for ${Currency} transactions`;
      if (arrFinal.length === 0) {
        errorArr.push(error);
      }
    }
    errorObj = {
      errorArr,
      error,
    };
    return errorArr.length > 0 ? errorObj : val;
  });
  return errorArr.length > 0 && errorObj;
};

export function getOccurrence(array, value) {
  let count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

export const getValidIndex = async (arrFinal) => {
  let coo;
  let validIndex;
  if (arrFinal.length > 0) {
    arrFinal.map((vv, index) => {
      const valg = Object.values(vv);
      const occurence = getOccurrence(valg, '*');
      if (coo === undefined) {
        coo = occurence;
        validIndex = index;
      } else if (occurence < coo) {
        coo = occurence;
        validIndex = index;
      }
      return validIndex;
    });
  }
  return validIndex;
};

export const calculateCharge = async (arrFinal, validIndex, Amount, BearsFee) => {
  const validChargeArray = arrFinal[validIndex];
  const appliedFeeType = validChargeArray.feeType;
  const { feeValue } = validChargeArray;

  let AppliedFeeValue;
  if (appliedFeeType === 'PERC') {
    AppliedFeeValue = (Number(feeValue) / 100) * Amount;
  } else if (appliedFeeType === 'FLAT') {
    AppliedFeeValue = Number(feeValue);
  } else {
    const feeString = feeValue.split(':');
    AppliedFeeValue = Number(feeString[0]) + ((Number(feeString[1]) / 100) * Amount);
  }
  const AppliedFeeID = validChargeArray.feeId;
  const ChargeAmount = BearsFee ? Amount + AppliedFeeValue : Amount;
  const SettlementAmount = ChargeAmount - AppliedFeeValue;
  return {
    AppliedFeeID, AppliedFeeValue: Math.ceil(AppliedFeeValue), ChargeAmount, SettlementAmount,
  };
};
