function each (arr, callback) {

  for (let i = 0, l = arr.length; i < l; i++) {
    
    if (callback.call(arr[i], i, arr[i]) === false) break

  }

}

export {
  each
}