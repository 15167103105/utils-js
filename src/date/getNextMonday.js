import moment from 'moment';

/**
 * 取下周一时间
 */
 export default function getNextMonday() {
  let date = moment();
  let dow = date.day();
  let monday1 = date.subtract(dow - 1, 'days').format('YYYY-MM-DD');
  let monday2 = moment(monday1).subtract(-7, 'days').format('YYYY-MM-DD');
  return moment(monday2).format('YYYY-MM-DD');
}