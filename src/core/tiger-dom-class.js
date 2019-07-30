import { isFunc, isTigerDom, isString } from '../utils/type-checking.js'
import { idRe, htmlRe } from './variables.js'


class TigerDom {
  constructor (selector, context = document) {

    if (!selector) return

    if (isTigerDom(selector)) return selector

    let eles = selector
 
    if (isString(selector)) {
      const ctx = isTigerDom(context) ? context[0] : context

      eles = idRe.test(selector) 
            ? document.getElementById(selector.slice(1))
            : htmlRe.test(selector)
              ? parseHTML(selector)
              : find(selector, ctx)

      if (!eles) return

    } else if (isFunc (selector)) {

      return this.ready(selector)

    }

    if (eles.nodeType || eles === window) eles = [eles]

    this.length = eles.length

    for (let i = 0, l = this.length; i < l; i++) {
      this[i] = eles[i]
    }
  }

  init (selector, context = document) {
    return new TigerDom(selector, context)
  }
}

export default TigerDom