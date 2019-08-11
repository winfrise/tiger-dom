import { TigerClass } from './tiger-class'


function tiger (selector, context) {
  return new TigerClass(selector, context)
}


export default tiger