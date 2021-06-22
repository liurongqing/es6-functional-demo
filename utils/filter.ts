export const filter = (arr: any[], fn: Function) => {
  let results = []
  for (const value of arr) {
    fn(value) ? results.push(value) : undefined
  }
  return results
}
