const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send("Welcome to my Github")
})
app.listen(2525,()=>{
    res.send("Server running is port on 2525")
})