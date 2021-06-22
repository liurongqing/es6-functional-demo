export const forEach = (arr: any[], fn: Function) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i)
  }
}
