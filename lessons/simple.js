
const {sum, subtract} = require('../math')

let result = sum(3,7)
let expected = 10;

result = subtract(7,3)
if(result !== expected) {
  throw new Error(`${result} is not equal to  ${expected}`)
}
