/**
 * 是否微信中打开网页
 * @returns {boolean}
 */
 export default function isWxWebView() {
  let ua = window.navigator.userAgent.toLowerCase();
  return /MicroMessenger/i.test(ua);
}