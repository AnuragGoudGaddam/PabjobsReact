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

// :Projects

projecttitle:{
    type:String,
    require:true
},
projectdescription:{
    type:String,
    require:true
},
projectgithublink:{
    type:String,
    require:true
},

//Accomplishment 

worksample:{
    type:String,
    require:true
},
// white paper

papertitle:{
    type:String,
    require:true
},
paperauthor:{
    type:String,
    require:true
},
paperpublicationdate:{
    type:String,
    require:true
},
// Presentation
preaentationtitle:{
    type:String,
    require:true
},
presentationspeaker:{
    type:String,
    require:true
},
presentiondate:{
    type:String,
    require:true
},
// patent
accpatent:{
    type:String,
    require:true
},
//certification
certificationname:{
    type:String,
    require:true
},
certificationorganization:{
    type:String,
    require:true
},
certificationdate:{
    type:String,
    require:true
},

//Desired Career Profile

desireindustry:{
    type:String,
    require:true
},
desiredesignation:{
    type:String,
    require:true
},
DesiredtoShift:{
    type:String,
    require:true
},
PreferedLocation:{
    type:String,
    require:true
},
desireExpectedCTC:{
    type:String,
    require:true
},
desireEmploymenttype:{
    type:String,
    require:true
},
//Personal Details
DateOfBirth:{
    type:String,
    require:true
},
Age:{
    type:String,
    require:true
},
Gender:{
    type:String,
    require:true
},
MaritalStatus:{
    type:String,
    require:true
},
Languages:{
    type:String,
    require:true
},
personalEmploymenttype:{
    type:String,
    require:true
// },
// pdfSchema :{
//     name: String,
//     data: Buffer,


}

})
const resumeData = mongoose.model("resumeData", productSchema);
module.exports = resumeData;