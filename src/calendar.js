class Calendar {
  static calendarFormat(reference, now) {
    const diff = new Interval(reference - now).dateSeq['D']
    const defaultFormat = diff < -6 ? 'sameElse' :
      diff < -1 ? 'lastWeek' :
      diff < 0 ? 'lastDay' :
      diff < 1 ? 'sameDay' :
      diff < 2 ? 'nextDay' :
      diff < 7 ? 'nextWeek' : 'sameElse'
  }
}
