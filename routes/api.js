const express=require('express')
const Registration = require('../models/registration')
const router=express.Router()

router.get('/registrations',(req,res,next)=>{
    res.send({type: "GET"})
   
})


router.post('/registrations',(req,res,next)=>{
    var register=new Registration(req.body)
    register.save().then((register)=>{
        
        res.send(register)
    }).catch(next)
})

module.exports=router