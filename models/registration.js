const mongoose=require('mongoose')

const Schema=mongoose.Schema

const RegistrationSchema=new Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true

    }
})
RegistrationSchema.path('email').validate(async(email)=>{
    const emailCount=await mongoose.model.registration.countDocuments({email:email})
    return !emailCount
},'Email already exists')


const Registration=mongoose.model('registration',RegistrationSchema)
module.exports=Registration


