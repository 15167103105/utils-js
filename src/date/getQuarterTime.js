import moment from 'moment';

/**
 * 取距离当前最近的整刻时间
 */
 export function getQuarterTime(date) {
  if (!date) {
    return ''
  }
  const start = date ? moment(date) : moment();
  const remainder = 15 - (start.minute() % 15);
  const dateTime = moment(start).add(remainder, 'minutes').valueOf();
  return dateTime;
}
