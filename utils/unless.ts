export const unless = (predicate: boolean, fn: Function) => {
  if (!predicate) fn()
}
