function success(req,res,body,status){
    status = status ? status : 200
    message = message ? message : 'Success'

    res.status(status).json({
        status,
        body,
        error:false
    })

}

function error(req,res,message,status){
    status = status ? status : 400
    message = message ? message : 'Internal server error'

    res.status(status).json({
        status,
        body,
        error:true
    })

}
