const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://asta.studis-bht.de/service/lernraeume/'

async function get_static_website (url) {
  const response = await axios.get(url)
  return response.data
}

function scrape_rooms (html) {
  const $ = cheerio.load(html)
  const relevant_markup = $('li', '#primary')

  const rooms = []
  relevant_markup.contents().each((index, element) => { rooms.push(element.data) })

  return rooms
}

async function get_learn_rooms () {
  const html = await get_static_website(url)
  const rooms = scrape_rooms(html)
  return rooms
}

exports.get_learn_rooms = get_learn_rooms
