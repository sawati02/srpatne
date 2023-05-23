const mongoose =require("mongoose");

const namesModel=mongoose.model("names",{
    name : {type:String}
})
module.exports=namesModel;