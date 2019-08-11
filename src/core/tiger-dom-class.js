import { isFunc, isTigerDom, isString } from '../utils/type-checking'
import { idRe, htmlRe } from './dom/variables'
import { find } from './dom/find'


class TigerDom {
  constructor (selector, context = document) {

    if (!selector) return

    // 判断selector是否是TigerDom实例
    if (isTigerDom(selector)) return selector

    let eles = selector
 
    if (isString(selector)) {

      // 如果selector是否是字符串
      const ctx = isTigerDom(context) ? context[0] : context

      eles = idRe.test(selector) // id选择器
            ? document.getElementById(selector.slice(1))
            : htmlRe.test(selector) // HTML字符串
              ? parseHTML(selector)
              : find(selector, ctx)

      if (!eles) return

    } else if (isFunc (selector)) {

      // 如果selector是一个函数
      return this.ready(selector)

    }

    // 如果eles(selector)是一个DOM元素
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