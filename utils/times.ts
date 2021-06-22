export const times = (size: number, fn: Function) => {
  for (let i = 0; i < size; i++) {
    fn(i)
  }
}
