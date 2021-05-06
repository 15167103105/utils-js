/**
 * 过滤特殊字符
 */
 export default function specialStrFilter(value) {
  // eslint-disable-next-line no-useless-escape
  let specialStrFilterReg = /[^A-Za-z0-9_\-\u4e00-\u9fa5\~\`\!\@\#\$\%\^\&\*\(\)\-\+\=\[\{\]\}\;\:\,\.\?\<\>\/\·\~\！\￥\……\&\*\（\）\——\「\【\】\」\|\、\|\；\’\：\“\《\》\？\，\。\、\\\'\"]+/g;
  return value.replace(specialStrFilterReg, '');
}