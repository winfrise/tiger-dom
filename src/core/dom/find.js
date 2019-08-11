import { idRe, classRe, tagRe } from "./variables"
import { isDoc , isEle } from '../../utils/type-checking'

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

export {
  find
}