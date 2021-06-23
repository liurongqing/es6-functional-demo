import { reduce } from './reduce'
export const compose =
  (...fns: any[]) =>
  (value: any) =>
    reduce(fns.reverse(), (acc: any, fn: Function) => fn(acc), value)
