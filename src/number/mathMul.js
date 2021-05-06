/**
 * 乘
 * @param arg1
 * @param arg2
 * @returns {number}
 */
 export default function mathMul(arg1, arg2) {
  let m = 0;
  let firstArg;
  let lastArg;
  firstArg = arg1.toString();
  lastArg = arg2.toString();

  try {
    m += firstArg.split('.')[1].length;
  } catch (e) {
    // console.log(e);
  }

  try {
    m += lastArg.split('.')[1].length;
  } catch (e) {
    // console.log(e);
  }

  return Number(firstArg.replace('.', '')) * Number(lastArg.replace('.', '')) / (10 ** m);
}