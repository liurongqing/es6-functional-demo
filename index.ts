import { forEach } from './utils/forEach'
import { forEachObject } from './utils/forEachObject'

// forEach([11, 22, 33], (value: number, index: number) => {
//   console.log(value, index)
// })

forEachObject({ a: 1, b: 2 }, (prop, value) => {
  console.log(prop, value)
})
