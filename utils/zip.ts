export const zip = (leftArr: any[], rightArr: any[], fn: Function) => {
  let results = []
  for (
    let index = 0;
    index < Math.min(leftArr.length, rightArr.length);
    index++
  ) {
    results.push(fn(leftArr[index], rightArr[index]))
  }
  return results
}
