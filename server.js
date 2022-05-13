require('dotenv').config()

const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) =>{
  res.send('This is the user page!')
})

app.get('/location', (req, res) =>{
  res.send('This is the location page!')
})

app.get('/route', (req, res) =>{
  res.send('This is the route page!')
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})