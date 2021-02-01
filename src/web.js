const express = require('express')
const consola = require('consola');

const app = express();

app.get("/", (req, res) =>  {
  consola.info(res, res)
  res.send('hello dynamic '+ Math.random())
})

app.listen(5000, 'localhost', () => consola.info('listening on 5000'))

module.exports = { app }

