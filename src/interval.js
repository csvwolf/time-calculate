const { TIME_LIST_EN, TIME_UNIT } = require('./constant')

const timestampToSeq = (timestamp) => {
  const result = { D: 0, h: 0, m: 0, s: 0 }
  const seq = ['D', 'h', 'm', 's']
  seq.forEach(t => {
    if (timestamp / TIME_UNIT[t] >= 1) {
      result[t] = Math.floor(timestamp / TIME_UNIT[t])
    }
    timestamp %= TIME_UNIT[t]
  })
  return result
}

class Interval {
  constructor(timestamp = 0) {
    this.timestamp = timestamp
    this.dateSeq = timestampToSeq(timestamp)
  }

  /**
   * 时间戳转时间间隔
   * @param {String} format 
   */
  format(format) {
    if (!format) return this.timestamp
    return format.replace(/({([Dhms])})/g, (...args) => {
      return this.dateSeq[args[2]]
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
