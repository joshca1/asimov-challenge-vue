import moment from 'moment'

export const numberHourToFullFormat = hour => {
  // CONVERT AN HOUR IN NUMBER INTO A FULL HOUR FORMAT
  // example pass 9 returns 09:00 AM
  return moment(hour, 'h').format('hh:mm A')
}

export const fullFormatToNumberHour = hour => {
  // CONVERT FULL DATE TO A 24H Number format to
  //store into the db
  // example pass 04:00 PM turns into 16
  return moment(hour, 'hh:mm A').format('H')
}

export const formatToFullDate = date => {
  return moment(date).format('DD-MM-YYYY')
}

export const dbFormatDate = date => {
  //converts a (DD-MM-YYY ) to a (YYYY-MM-DD) format
  return moment(date).format('YYYY-MM-DD')
}

export const todayDateToDbFormat = () => {
  return moment(new Date()).format('YYYY-MM-DD')
}

export const addDayDateToDbFormat = day => {
  return moment(new Date())
    .add(day, 'day')
    .format('YYYY-MM-DD')
}
