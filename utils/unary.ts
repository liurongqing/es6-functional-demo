export const unary = (fn: Function): any =>
  fn.length === 1 ? fn : (arg: unknown) => fn(arg)
