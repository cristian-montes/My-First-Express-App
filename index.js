// console.log('hello peeps!');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/puppies', (req, res) => {
    res.send(`Puppies are cute! Especially ${req.query.name}`);
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})