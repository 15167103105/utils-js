/**
 * 随机整数
 */
 export default function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}