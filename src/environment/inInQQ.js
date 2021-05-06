export default function isQQ() {
  const ua = window.navigator.userAgent.toLowerCase();
  return (/qq/.test(ua));
}