const Time = require('./src/time')

const date = new Date()
console.log(Time.sub(date, { D: 1 }))
console.log(Time.diff(date, Time.sub(date, { D: 1 }), '{D}天{s}秒'))

module.exports = Time
