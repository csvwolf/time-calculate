const Interval = require('../src/interval')

test('format interval to date', () => {
  expect(new Interval(1000).format()).toBe(1000)
  expect(new Interval(1000).format('{s}s')).toBe('1s')
})

test('change interval string to timestamp', () => {
  // U can use D, h, m, s
  expect(new Interval().parse('1s')).toBe(1000)
})
