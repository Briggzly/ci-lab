const { getGreeting, addN } = require('./project.js')

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
})

test('can add numbers', () => {
  expect(addN(5,5)).toBe(10)
})