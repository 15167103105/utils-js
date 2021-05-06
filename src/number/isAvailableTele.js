/**
 * 校验手机号格式
 */
 export default function isAvailableTele(tel) {
  let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!myreg.test(tel)) {
    return false;
  }
  return true;
}