// TODO 有引用问题吧
export const map = (arr: any[], fn: Function) => {
  let results = []
  for (let value of arr) {
    results.push(fn(value))
  }
  return results
}
