const {sumAsync, subtractAsync} = require('../math')

test("sum adds numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});


test("sum subtracts numbers", async () => {
  const result = await sumAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});


async function test(title, callback) {
  try {
    await callback()
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
 