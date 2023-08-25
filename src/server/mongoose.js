const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    typeofreg:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
     mobilenumber:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
})
const userData=mongoose.model("userData",productSchema);
module.exports=userData;



const productSchema1=new mongoose.Schema({

       fullname1:{
        type:String,
        require:true
    },
    state1:{
        type:String,
        require:true
    },
    currentLocation1:{
        type:String,
        require:true
    },
     mobile1:{
        type:Number,
        require:true
    },
    email1:{
        type:String,
        require:true
    },
})
const profileData=mongoose.model("profileData",productSchema1);
module.exports=profileData;