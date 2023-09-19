const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  
    resumeheadline: {
        type: String,
        require: true
    },
  
    profileSummery: {
        type: String,
        require: true
    }, 

    keyskill: {
        type: String,
        require: true
    },

// UI & UX


    uitotalEXp:{
        type: String,
        require: true
    },
    uifromdate:{
        type:String,
        require:true
    },
    describeJob:{
        type:String,
        require:true
    },
    currentCTC:{
        type:String,
        require:true

    },
    uitilldate:{
        type:String,
        require:true
    },

// Education
educationDegree:{
    type:String,
    require:true
},
university:{
    type:String,
    require:true
},
educationyear:{
    type:String,
    require:true
},

// 



})
const resumeData = mongoose.model("resumeData", productSchema);
module.exports = resumeData;