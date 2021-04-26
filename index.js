const express=require('express')

const bodyParser=require('body-parser')

const routes=require('./routes/api')

const mongoose=require('mongoose')

const app=express()

const mongoURL=`mongodb+srv://root:root@cluster0.s8acx.mongodb.net/Cluster0?retryWrites=true&w=majority`

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json())

app.use('/api',routes)

app.use((err,req,res,next)=>{

 res.status(422).send({error: err.message})

})

app.listen(process.env.port||8900,()=>{
    console.log("Listening for requests...")
})


