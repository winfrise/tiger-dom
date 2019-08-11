import { isString } from './type-checking'

const splitValuesRe = /\S+/g

function getSplitValues (str) {
  return isString(str) ? str.match(splitValuesRe) || [] : []
}