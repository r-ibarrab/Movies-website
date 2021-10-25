const { parse } = require('dotenv')
const express = require('express')
const router = express.Router()

const movies = require('../dummy')

const response  = require('../network/response')


router.get('/:id',get)
router.get('/',getAll)
router.get('/range/:start/:end',getRange)


function get(req,res,next){
    id = req.params.id
    console.log(id)
    result = movies.filter(movie=> movie.id == id)

    console.log('result:',result)
    res.send(result[0])
}

function getAll(req,res,next){
    
}

function getRange(req,res,next){
    let { start, end } = req.params 
    result =[]
    start = parseInt(start)
    end = parseInt(end)
    for(let c = start;c<end;c++){
        console.log(movies[c])
       
        if(movies[c])  result.push(movies[c])
       
    }
    console.log(result)
    res.send(result)
}








module.exports = router