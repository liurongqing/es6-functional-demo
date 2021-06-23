import { reduce } from './reduce'

export const pipe =
  (...fns: any) =>
  (values: unknown) =>
    reduce(fns, (acc: unknown, fn: Function) => fn(acc), values)
