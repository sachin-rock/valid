const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname : {type:String,required:true},
    lastname: {type:String,required:false},
    email : {type:String,required:true},
    pincode : {type:Number,required:true},
    age: {type:Number,required:true},
    gender : {type:String,required:true}
})
const users = mongoose.model("user",UserSchema)
module.exports = users;