const {sumAsync, subtractAsync} = require('../math')

function sumTest() { 

}
test("sum adds numbers", () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected);
});

function subtractTest() { 

}
test("sum subtracts numbers", () => {
  const result = sum(7, 3)
  const expected = 4
  expect(result).toBe(expected);
});



function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}



function test(title, callback) {
  try {
    callback()
    console.log(`^ ${title}`)
  } catch (error) {
    console.error(`x ${title}`)
    console.error(error)
  }
 }

// test('sumAsync adds numbers asynchronously', async () => {
//   const result = await sumAsync(3, 7)
//   const expected = 10
//   expect(result).toBe(expected)
// })

// test('subtractAsync subtracts numbers asynchronously', async () => {
//   const result = await subtractAsync(7, 3)
//   const expected = 4
//   expect(result).toBe(expected)
// })
 