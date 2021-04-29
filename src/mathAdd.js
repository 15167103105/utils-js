/**
 * js加法 解决精度问题  http://www.cnblogs.com/tugenhua0707/p/3511453.html
 */
 export default function mathAdd(arg1, arg2) {
  let firstArg;
  let lastArg;
  let differ;
  let dm;
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
  differ = Math.abs(firstArg - lastArg);
  m = 10 ** Math.max(firstArg, lastArg);
  if (differ > 0) {
    dm = 10 ** differ;
    if (firstArg > lastArg) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * dm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * dm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  return (arg1 + arg2) / m;
}