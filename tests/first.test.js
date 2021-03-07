const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/first')

test('Should calculate total with tip', () => {

  const total = calculateTip(10, .3)
  expect(total).toBe(13)

})

test('Should convert 32 F to 0 C', () => {
  const temp = fahrenheitToCelsius(32)
  expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
  const temp = celsiusToFahrenheit(0)
  expect(temp).toBe(32)
})