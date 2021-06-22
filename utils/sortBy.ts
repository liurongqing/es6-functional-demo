export const sortBy = (property: string) => (a: Object, b: Object) =>
  a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
