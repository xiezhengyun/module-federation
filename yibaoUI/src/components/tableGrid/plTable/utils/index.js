export const isArrayFn = e => {
  return typeof Array.isArray === 'function' ? Array.isArray(e) : Object.prototype.toString.call(e) === '[object Array]'
}
export const typeIs = e => {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
}
export const parseHeight = e => {
  return typeof e === 'number' ? e : typeof e === 'string' ? (/^\d+(?:px)?$/.test(e) ? parseInt(e, 10) : e) : null
}
export const removal = e => {
  if (isArrayFn(e)) {
    return e.filter(function (e, t, i) {
      return i.indexOf(e) === t
    })
  }
  throw new Error('需要的是数组')
}
