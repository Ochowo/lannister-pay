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
