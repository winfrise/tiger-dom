import TigerDom from '../core/tiger-dom-class.js'
function isFunc (o) {
  return typeof o === 'function'
}

function isTigerDom (o) {
  return o instanceof TigerDom
}

function isString (o) {
  return typeof o === 'string'
}

export {
  isFunc,
  isTigerDom,
  isString
}