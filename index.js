const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) =>{ 
  var a = 10;
  var b = 20;
   
  var c = a  + b

  res.send({
  data: "hello"
})})

app.post("/hello", (req, res) => {
  res.send('post')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})