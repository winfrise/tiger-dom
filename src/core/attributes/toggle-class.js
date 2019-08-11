import { getSplitValues } from '../../utils/get-split-values'
function toggleClass (cls, force) {
  const classes = getSplitValues(),
        isForce = (force !== undefined)
  
  if (!classes) return this

  return this.each((i, ele) => {
    each(classes, (i, c) => {

    })
  })
}

export {
  toggleClass
}