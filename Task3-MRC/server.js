const express = require("express")
const mongoose = require("mongoose")
const dotenv  = require("dotenv")
const cors = require('cors')
const userRoute = require("./routes/routes");


dotenv.config()

const app  = express()

app.use(cors())

app.use(express.json())

app.use("/api", userRoute);


mongoose.connect(process.env.ATLAS_URI,{
    useNewUrlParse:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},
(err)=>{
    if(err){
        console.log("Error Connecting in Database")
    }
    else {
        console.log("Database Successfully Connected")
    }
})

app.listen(5000,()=> {
    console.log("server is up and running")
});