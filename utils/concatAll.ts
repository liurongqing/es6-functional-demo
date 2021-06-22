// flatten    [{}, [{}]].flat()
export const concatAll = (arr: any[], fn: Function) => {
  let results = []
  for (const value of arr) {
    results.push.apply(results, value)
  }
  return results
}
