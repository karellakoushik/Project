const express = require('express')
const app = express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose')
const url='mongodb+srv://pranathi:abcdefg12@cluster0.dkm7puk.mongodb.net/?retryWrites=true&w=majority'
//const url = 'mongodb+srv://pranathi:oHHxIOVV7eg76aqu@cluster0.94gip58.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected with mongodb database')
})

const route = require('./routes/route.js')
app.use('/',route)

app.listen(5000, () => {
    console.log('Server started')
})
