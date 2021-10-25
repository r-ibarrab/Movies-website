const express = require('express')
const morgan = require('morgan')
const { dirname } = require('path')
const path = require('path')
const Api = require('./api/index')
require('dotenv/config')

const app = express()

//Middlewares
app.use(morgan('dev'))

//Statics
app.use('/',express.static(path.join(__dirname,'web')))


//Routing
app.use('/api',Api)

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'web','home.html'))
})


app.listen(process.env.PORT,e=>{
    console.log(process.env.PORT)
    if(e) return console.log("error")

    console.log('Server running')
})