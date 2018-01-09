const Interval = require('./interval')

class Time {
  static add(date, interval) {
    return new Date(+date +  (new Interval()).parse(interval) )
  }

  static sub(date, interval) {
    return new Date(+date -  (new Interval()).parse(interval) )
  }

  /**
   * Calculate Two Time diff 
   * @param {Date} date1 
   * @param {Date} date2 
   */
  static diff(date1, date2, format) {
    return new Interval(date1 - date2 > 0 ? date1 - date2 : date2 - date1).format(format)
  }
}

module.exports = Time
