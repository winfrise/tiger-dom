(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.$ = factory());
}(this, function () { 'use strict';

  var doc = document;

  const idRe = /^#[a-zA-Z][\w]*/;

  const classRe = /^\.[a-zA-Z][\w]*/;

  const tagRe = /^[a-zA-z][\w]*/;

  class TigerClass {
    constructor (selector, context) {
      var eles;
      if (context && (context instanceof TigerClass)) { // 如果context是TigerClass实例 设置context为context[0]
        context = context[0];
      }
      if (idRe.test(selector)) {  // 如果是ID选择器
        eles = [doc.getElementById(selector.slice(1))];
      } else if (classRe.test(selector)) { // 如果是类选择器
        eles = (context || doc).getElementsByClassName(selector.slice(1));
      } else if (tagRe.test(selector)) {
        eles = (context || doc).getElementsByTagName(selector);
      } else {
        eles = document.querySelectorAll(selector);
      }

      Array.prototype.forEach.call(eles, (ele, index) => {
        this[index] = ele;
      });

      return this
    }

    addClass (className) {
      if (!this[0].classList.contains(className)) {
        this[0].classList.add(className);
      }
    }

    removeClass (className) {
      if (this[0].classList.contains[className]) {
        this[0].classList.remove(className);
      }
    }

    toggleClass (className) {
      if (this[0].classList.contains(className)) {
        this[0].classList.add(className);
      } else {
        this[0].classList.remove(className);
      }
    }

    extend (name, fn) {
      TigerClass.prototype[name] = fn;
    }
  }

  function tiger (selector, context) {
    return new TigerClass(selector, context)
  }

  return tiger;

}));
