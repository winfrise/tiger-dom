import TigerDom from '../core/tiger-dom-class'

TigerDom.prototype.methods = function (name, fn) {
  TigerDom.prototype[name] = fn
}