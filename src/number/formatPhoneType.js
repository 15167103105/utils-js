// 格式化手机号
export function formatPhoneType(str) {
  if (!str) {
    return '';
  }
  if (str.length !== 11) {
    return str;
  }
  return `${str.substr(0, 3)} ${str.substr(3, 4)} ${str.substr(7, 4)}`;
}