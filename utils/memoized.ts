export const memoized = (fn: Function) => {
  const lookupTable = {}
  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}
