const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send("Welcome to my Github")
})
app.get("/name",(req,res)=>{
    res.send(["Swati","Pinky"])
})
app.listen(2525,()=>{
    res.send("Server running is port on 2525")
})