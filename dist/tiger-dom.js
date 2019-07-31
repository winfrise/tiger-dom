(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.$ = factory());
}(this, function () { 'use strict';

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

  const doc = document;
  const div = doc.createElement('div');

  const idRe = /^#[\w-]*$/;
  const classRe = /^\.[\w-]*$/;
  const htmlRe = /<.+>/;
  const tagRe = /^\w+$/;

  function find (selector, context = document) {
    return !isDoc(context) && !isEle(context)
              ? []
              : idRe.test(selector) 
                ? [ document.getElementById(selector.slice(1)) ]
                : classRe.test(selector)
                  ? context.getElementsByClassName(selector.slice(1))
                  : tagRe.test(selector)
                    ? context.getElementsByTagName(selector)
                    : context.querySelectorAll(selector)

  }

  class TigerDom {
    constructor (selector, context = document) {

      if (!selector) return

      // 判断selector是否是TigerDom实例
      if (isTigerDom(selector)) return selector

      let eles = selector;
   
      if (isString(selector)) {

        // 如果selector是否是字符串
        const ctx = isTigerDom(context) ? context[0] : context;

        eles = idRe.test(selector) // id选择器
              ? document.getElementById(selector.slice(1))
              : htmlRe.test(selector) // HTML字符串
                ? parseHTML(selector)
                : find(selector, ctx);

        if (!eles) return

      } else if (isFunc (selector)) {

        // 如果selector是一个函数
        return this.ready(selector)

      }

      // 如果eles(selector)是一个DOM元素
      if (eles.nodeType || eles === window) eles = [eles];

      this.length = eles.length;

      for (let i = 0, l = this.length; i < l; i++) {
        this[i] = eles[i];
      }
    }

    init (selector, context = document) {
      return new TigerDom(selector, context)
    }
  }

  const tigerDom = TigerDom.prototype.init;

  return tigerDom;

}));
