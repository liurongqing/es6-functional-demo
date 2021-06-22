import { forEach } from './utils/forEach'

forEach([11, 22, 33], (value: number, index: number) => {
  console.log(value, index)
})
