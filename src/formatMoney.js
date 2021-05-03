import { isNumber } from 'lodash';
/**
 * 格式化金额，保留2位小数
 */
 export default function formatMoney(money) {
  if (!money) {
    return '';
  }
  if (isNumber(money)) {
    money = String(money);
  }
  if (money && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(money)) {
    if (money === '.') {
      money = `0${money}`;
    }
  }
  money = money.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
  money = money.match(/^\d+(?:\.\d{0,2})?/);
  return money[0];
}