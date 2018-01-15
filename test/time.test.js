const Time = require('../src/time')

// Mon Jan 15 2018 20:32:09 GMT+0800 (CST)
const DATETIME = 1516019533741
// Mon Jan 16 2018 20:32:09 GMT+0800 (CST)
const THE_DAY_AFTER = 1516105933741
// Mon Jan 14 2018 20:32:09 GMT+0800 (CST)
const THE_DAY_BEFORE = 1515933133741

test('add time', () => {
  expect(+Time.add(new Date(DATETIME), '1D')).toBe(THE_DAY_AFTER)
})

test('sub time', () => {
  expect(+Time.sub(new Date(DATETIME), '1D')).toBe(THE_DAY_BEFORE)
})

test('diff two time return interval', () => {
  expect(Time.diff(DATETIME, THE_DAY_AFTER, '{D}天')).toBe('1天')
})
