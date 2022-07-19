const { signs } = require('../data/signs')

// categorize zodiac signs
async function mapHoroscopes (month, day) {
  if ((month === 'March' && day >= 21) || (month === 'April' && day <= 19)) {
    return signs[0]
  } else if ((month === 'April' && day >= 20) || (month === 'May' && day <= 20)) {
    return signs[1]
  } else if ((month === 'May' && day >= 21) || (month === 'June' && day <= 20)) {
    return signs[2]
  } else if ((month === 'June' && day >= 22) || (month === 'July' && day <= 22)) {
    return signs[3]
  } else if ((month === 'July' && day >= 23) || (month === 'August' && day <= 22)) {
    return signs[4]
  } else if ((month === 'August' && day >= 23) || (month === 'September' && day <= 22)) {
    return signs[5]
  } else if ((month === 'September' && day >= 23) || (month === 'October' && day <= 22)) {
    return signs[6]
  } else if ((month === 'October' && day >= 23) || (month === 'Novermber' && day <= 21)) {
    return signs[7]
  } else if ((month === 'November' && day >= 22) || (month === 'December' && day <= 21)) {
    return signs[8]
  } else if ((month === 'December' && day >= 22) || (month === 'January' && day <= 19)) {
    return signs[9]
  } else if ((month === 'January' && day >= 20) || (month === 'February' && day <= 18)) {
    return signs[10]
  } else if ((month === 'February' && day >= 19) || (month === 'March' && day <= 20)) {
    return signs[11]
  }
}

module.exports = { mapHoroscopes }
