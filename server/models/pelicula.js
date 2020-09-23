const mongoose = require('mongoose')
let Schema = mongoose.Schema

let peliculaSchema = new Schema({
  Title: {
    type: String,
    required: [true, 'el nombre es requerido']
  },
  Year: {
    type: String,
    required: false
  },
  Type: {
    type: String,
    required: [true, 'el type es requerido']
  },
  imdbID: {
    type: String,
    unique: true,
    required: [true, 'el imdbID es requerido']
  },
  Poster: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Pelicula', peliculaSchema)