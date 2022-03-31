const express = require("express")
const connect = require("./configs/db")
const app = express()
app.use(express.json())
const usercontroller = require("./controllers/user.controller")

app.use("/users",usercontroller)

app.listen(5000,async()=>{
    try{
        await connect()
    }catch(err){
        console.log(err.message)
        return res.send(err.message)

    }
    console.log("listening")
})




