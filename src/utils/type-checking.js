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

function isDoc (o) {
  return o && o.nodeType === 9
}

function isEle (o) {
  return o && o.nodeType === 1

}

export {
  isFunc,
  isTigerDom,
  isString,
  isDoc,
  isEle
}