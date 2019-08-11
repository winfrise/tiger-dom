import { toggleClass } from './toggle-class'

function mixinAttr (TigerDom) {
  TigerDom.prototype.toggleClass = toggleClass
}

export {
  mixinAttr
}