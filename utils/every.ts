export const every = (arr: any[], fn: Function) => {
  for (const value of arr) {
    if (!fn(value)) {
      return false
    }
  }
  return true
}
