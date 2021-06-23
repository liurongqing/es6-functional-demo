export const reduce = (arr: any[], fn: Function, initialValue?: any) => {
  let accumlator
  if (initialValue === undefined) {
    accumlator = arr[0]
    for (let i = 1; i < arr.length; i++) {
      accumlator = fn(accumlator, arr[i])
    }
  } else {
    accumlator = initialValue
    for (let value of arr) {
      accumlator = fn(accumlator, value)
    }
  }

  return [accumlator]
}
