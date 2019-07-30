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

  const doc = document;
  const div = doc.createElement('div');

  const idRe = /^#[\w-]*$/;
  const htmlRe = /<.+>/;

  class TigerDom {
    constructor (selector, context = document) {

      if (!selector) return

      if (isTigerDom(selector)) return selector

      let eles = selector;
   
      if (isString(selector)) {
        const ctx = isTigerDom(context) ? context[0] : context;

        eles = idRe.test(selector) 
              ? document.getElementById(selector.slice(1))
              : htmlRe.test(selector)
                ? parseHTML(selector)
                : find(selector, ctx);

        if (!eles) return

      } else if (isFunc (selector)) {

        return this.ready(selector)

      }

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
