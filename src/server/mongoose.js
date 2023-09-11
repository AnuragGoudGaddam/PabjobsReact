const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    // type: {
    //     type: String,
    //      ear:['applicant','recruiter'],
    //     require: true
    // },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },

    email1: {
        type: String,
        require: true
    },
    
    contactNumber: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpassword: {
        type: String,
        require: true
    }


})
const userData = mongoose.model("userData", productSchema);
module.exports = userData;



// const productSchema1 = new mongoose.Schema({

//     fullname1: {
//         type: String,
//         require: true
//     },
//     state1: {
//         type: String,
//         require: true
//     },
//     currentLocation1: {
//         type: String,
//         require: true
//     },
//     mobile1: {
//         type: Number,
//         require: true
//     },
//     email1: {
//         type: String,
//         require: true
//     },
// })
// const profileData = mongoose.model("profileData", productSchema1);
// module.exports = profileData;

// const signupSchrema = new mongoose.Schema({

//     type: {
//         type: String,
//         ear: ['applicant', 'recuriter'],
//         require: true
//     },


//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     contactNumber: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: Number,
//         require: true
//     },
//     confirmpassword: {
//         type: String,
//         require: true
//     },
// })
// const signupData = mongoose.model("profileData", productSchema1);
// module.exports = signupData;