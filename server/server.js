require('./config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/peliculas'))


mongoose.connect('mongodb+srv://<user>:<password>@cluster0.rp7wm.mongodb.net/test1?retryWrites=true&w=majority', 
  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, 
  (err, res) => {
  if (err) {
    throw err
  } else {
    console.log('Base de datos ONLINE')
  }
})

app.listen(process.env.PORT, () => {
  console.log('server iniciado en puerto', process.env.PORT)
})