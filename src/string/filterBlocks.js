/**
 * 过滤空格
 */
 export function filterBlocks(value) {
  if (!value) {
    return '';
  }
  value = value.replace(/\s+/g, '');
  return value;
}