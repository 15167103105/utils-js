import moment from 'moment';
/**
 * 是否是今天
 */
 export default function isToday(date) {
  if (date) {
    if (moment(date).format(YYYYMMDD) === moment().format(YYYYMMDD)) {
      return true;
    }
    return false;
  }
  return false;
}