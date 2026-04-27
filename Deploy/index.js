require('dotenv').config()
const express = require('express')
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('DipanTimalsina');
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Backend with Dipan</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Dipan is great!</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
