const mongoose = require('mongoose')

const conexao = async() => {

var atlas = await mongoose.connect('mongodb+srv://LorenzoAcquesta:lolo0506@cluster0.umqxy.mongodb.net/teste')
}

module.exports = conexao