const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./data.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cows', (req, res) => {
    res.json(data);
  })

app.get('/cows/:id', (req, res) => {
    const cowID = Number(req.params.id)
    const cow = data.find((item) => item.id === cowID);
    res.json(cow);
  })

  module.exports = app;