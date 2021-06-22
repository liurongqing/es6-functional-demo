export const forEachObject = (obj: Object, fn: Function) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn(prop, obj[prop])
    }
  }
}
