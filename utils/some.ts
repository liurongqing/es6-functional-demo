export const some = (arr: any[], fn: Function) => {
  for (const value of arr) {
    if (fn(value)) return true
  }
  return false
}
