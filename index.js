const express = require('express')
const scraper = require('./scraper')

// # initialisation
const app = express()

// # web: localhost:8000
app.get('/learnrooms', async (req, res, next) => {
  const rooms = await scraper.get_learn_rooms()
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(rooms))
  res.end()
})

app.listen(8000)
