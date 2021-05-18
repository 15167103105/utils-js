/**
 * 淘宝图片缩略图
 * @returns {boolean}
 */
 export function tbThumbnail(url, size = 300) {
  if (!url) {
    return '';
  }
  if (url.indexOf('img.alicdn.com') > -1) {
    return `${url}_${size}x${size}`;
  }
  return url;
}