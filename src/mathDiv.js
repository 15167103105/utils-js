/**
 * 除
 * @param arg1
 * @param arg2
 * @returns {number}
 */
 export default function mathDiv(arg1, arg2) {
  let firstArg;
  let lastArg;
  let r1;
  let r2;
  if (!arg1 || !arg2) {
    return 0;
  }
  try {
    firstArg = arg1.toString().split('.')[1].length;
  } catch (e) {
    firstArg = 0;
  }

  try {
    lastArg = arg2.toString().split('.')[1].length;
  } catch (e) {
    lastArg = 0;
  }
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));

  return (r1 / r2) * (10 ** (lastArg - firstArg));
}