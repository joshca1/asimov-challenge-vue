import moment from 'moment'

export const dbHourToLocaleHour = hour => {
  //hour must be between 9 and 18
  // example pass 9 returns 09:00
  return moment(hour, 'h').format('hh:mm:a')
}
