const toString = Object.prototype.toString
export function isDate (val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
// 对于FormData 、ArrayBuffer也判断为true 这些数据类型send()的时候是不用处理的
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }
// 判断是否是普通对象
export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
