export const curry = (fn: Function) => {
  if (typeof fn !== 'function') throw Error('No Function provided')

  return function curriedFn(...args: any[]) {
    // 全部保存在 args 变量中
    if (args.length < fn.length) {
      return function () {
        // arguments 每次传进来的参数
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    return fn.apply(null, args)
  }
}
