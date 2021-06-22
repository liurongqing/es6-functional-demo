export const tap = (value: any) => (fn: Function) => {
  typeof fn === 'function' && fn(value)
}
