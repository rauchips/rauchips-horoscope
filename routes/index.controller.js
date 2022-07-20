/* eslint-disable camelcase */
const axios = require('axios')
const moment = require('moment')
const figlet = require('figlet')

const { mapHoroscopes } = require('../services/mapHoroscopes')

/*
  GET home page.
*/

async function getHomePage (req, res, next) {
  try {
    await res.status(200).render('index', { title: 'HOROSCOPE APP' })
  } catch (error) {
    console.error(error)
    next(error)
  }
}

/*
  POST home page.
*/

async function postHomePage (req, res, next) {
  try {
    const { name, gender, DOB } = req.body
    if (!name || gender === 'Gender' || !DOB) {
      return res.status(400).json({ message: 'Kindly add your details' })
    }

    // convert DOB to day and month
    const day = Number(moment(DOB).format('D'))
    const month = moment(DOB).format('MMMM')

    // map zodiac sign based on day and month
    const zodiac = await mapHoroscopes(month, day)

    // convert zodiac sign to ascii representation
    const toAscii = (string) => string.split('').map(char => char.charCodeAt(0)).join(' ')

    // aztro horoscope API
    const { data } = await axios.post(`https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`)

    // convert zodiac sign to ascii art
    figlet.text(`${zodiac}`, {
      font: 'Standard'
    }, function (err, ascii) {
      if (err) {
        return res.status(400).json({ message: 'Unable to form ascii art' })
      }
      console.log(ascii)
      console.log(data.description)
      return res.status(200).render('sign', { title: name, name, sign: ascii, description: data.description, current_date: data.current_date, lucky_number: toAscii(zodiac) })
    })
  } catch (error) {
    console.error(error)
    next(error)
  }
}

module.exports = {
  getHomePage,
  postHomePage
}
