require('dotenv').config()

const express = require('express')
const cors = require('cors');
const app = express();
//const router = require('./routes');
const hostname = '127.0.0.1';
const port = 3000;
var corsOrigin = {
  origin: 'http://localhost:3001'
};

app.use(cors(corsOrigin));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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