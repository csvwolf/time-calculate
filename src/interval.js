const { TIME_LIST_EN, TIME_UNIT } = require('./constant')

class Interval {
  constructor(timestamp = 0) {
    this.timestamp = timestamp
  }

  /**
   * 时间戳转时间间隔
   * @param {String} format 
   */
  format(format) {
    if (!format) return this.timestamp
    const result = { D: 0, h: 0, m: 0, s: 0 }
    let timestamp = this.timestamp
    const seq = ['D', 'h', 'm', 's']
    seq.forEach(t => {
      if (timestamp / TIME_UNIT[t] >= 1) {
        result[t] = Math.floor(timestamp / TIME_UNIT[t])
      }
      timestamp %= TIME_UNIT[t]
    })
    return format.replace(/({([Dhms])})/g, (...args) => {
      return result[args[2]]
    })
  }

  /**
   * 时间间隔转时间戳
   * @param {Object / String} interval 
   */
  parse(interval) {
    const seq = ['D', 'h', 'm', 's']
    if (typeof interval !== 'string') {
      this.timestamp = seq.reduce((timestamp, t) => {
        return interval[t] ? timestamp + interval[t] * TIME_UNIT[t] : timestamp
      }, 0)
    } else {
      const reg = /(\d+)([Dhms])/g
      let r = reg.exec(interval)
      while (r) {
        this.timestamp += parseInt(r[1]) * TIME_UNIT[r[2]]
        r = reg.exec(interval)
      }
    }

    return this.timestamp
  }
}

module.exports = Interval
