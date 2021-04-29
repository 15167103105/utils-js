/**
 * 相减
 * @param arg1
 * @param arg2
 * @returns {string}
 */
 export default function mathSub(arg1, arg2) {
  let firstArg;
  let lastArg;
  let differ;
  let m;
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
  differ = 10 ** Math.max(firstArg, lastArg);
  m = (firstArg > lastArg) ? firstArg : lastArg;
  return ((arg1 * differ - arg2 * differ) / differ).toFixed(m);
}