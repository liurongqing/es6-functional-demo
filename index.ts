import { forEach } from './utils/forEach'
import { forEachObject } from './utils/forEachObject'
import { every } from './utils/every'
import { some } from './utils/some'
import { tap } from './utils/tap'
import { unary } from './utils/unary'
import { map } from './utils/map'
import { concatAll } from './utils/concatAll'
import { curry } from './utils/curry'
import { curryEs6 } from './utils/curry-es6'

function multiply(a: number, b: number, c: number) {
  return a * b * c
}
var a = curryEs6(multiply)(2, 3)
console.log(a)

// var a = curry(multiply)(1)(3)(4)
// console.log(a)

// var a = [{ a: 1, b: 1 }, [{ a: 2, b: 2 }, [{ a: 3, b: 3 }, [{ a: 4, b: 4 }]]]]
// // console.log(concatAll(a))
// console.log(a.flat(Infinity))

// console.log(a.flat())

// var ar = [
//   { a: 1, b: 2 },
//   { a: 11, b: 22 },
// ]
// // var br = map(ar, (value) => value)
// var br = ar.map(v => v)

// console.log(ar);
// console.log(br);
// ar[0].a = 100
// console.log(ar);
// console.log(br);

// var data = ['1', '2', '3', '4'].map(parseInt)
// var data = ['1', '2', '3', '4'].map(unary(parseInt))
// console.log(data)

// forEach([11, 22, 33], (a) =>
//   tap(a)(() => {
//     console.log(a)
//   })
// )
// tap(1)((v) => console.log(v))

// some([11, 22, 33, 9, 44, 55], (v) => v < 10)
// forEach([11, 22, 33], (value: number, index: number) => {
//   console.log(value, index)
// })

// forEachObject({ a: 1, b: 2 }, (prop, value) => {
//   console.log(prop, value)
// })
