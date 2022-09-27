const mongoose = require('mongoose');
const express = require('express');
const url = "mongodb://localhost:27017/MessManagement"
const app = express()
const connect = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Connected to Mongodb")
    }
    catch(err){
        console.log("there was a  problem")
    }
}
mongoose.connection.on('disconnected',()=>{
    console.log("Mongo Disconnected")
})
mongoose.connection.on('connected',()=>{
    console.log("Mongo Connected")
})

const test = new mongoose.Schema({name : String});
const testdata = mongoose.model('bazar',test);
const name = new testdata({name: "ahsan"})
const v =async()=>{
    await name.save();
}
v();
app.listen(3001,()=>{
    connect()
    console.log("conntected to Backend")
})