export const curryEs6 = (
  fn: Function,
  arity = fn.length,
  ...args: any[]
): any => {
  return arity <= args.length
    ? fn(...args)
    : curryEs6.bind(null, fn, arity, ...args)
}
