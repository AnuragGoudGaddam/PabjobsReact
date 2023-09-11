const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./mongoose")
const profileData = require("./mongoose")
const middleware = require('./middleware')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const app = express();
app.use(express.json())

app.use(cors({ origin: "*" }))

mongoose.connect("mongodb+srv://anurag:anurag7093@cluster0.a4roxmm.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => console.log("db connected"))
    .catch((err) => console.log(err.message));


app.get("/", (req, res) => {
    res.send("Edi Panchestundi")
})


app.post("/jobseeker", async (req, res) => {
    console.log(req.body);

    try {
        const user = await userData.findOne({ email: req.body.email })   // mongo db condition
        console.log(user)

        if (!user) {  // or if(user === undefined)

            // user not found excutes below code


            const newUser = {

                // "type": req.body.type,
                "name": req.body.name,
                "email": req.body.email,
                "contactNumber": req.body.contactNumber,
                "password": req.body.password,
                "confirmpassword": req.body.confirmpassword

            };

            const userDetails = await userData.create(newUser)   //  POSTING TO COLLECTION OR MODEL
            console.log(userDetails)

            res.status(200).send("user created successfully")


        } else {

            // if user mail id is founded send below response
            res.status(400).json("user already registered")

        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json("messsage:e.message")

    }
})


app.post("/recuriter", async (req, res) => {
    console.log(req.body);

    try {
        const user = await userData.findOne({ email1: req.body.email1 })   // mongo db condition
        console.log(user)

        if (!user) {  // or if(user === undefined)

            // user not found excutes below code


            const newUser = {

                // "type": req.body.type,
                "name": req.body.name,
                "email1": req.body.email1,
                "contactNumber": req.body.contactNumber,
                "password": req.body.password,
                "confirmpassword": req.body.confirmpassword

            };

            const userDetails = await userData.create(newUser)   //  POSTING TO COLLECTION OR MODEL
            console.log(userDetails)

            res.status(200).send("user created successfully")


        } else {

            // if user mail id is founded send below response
            res.status(400).json("user already registered")

        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json("messsage:e.message")

    }
})


app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const isUserExit= await userData.findOne({email,password})

   

    if (isUserExit) {
        // const ispaswordmatched = await bcrypt.compare(password, isUserExit.password)
        if (password === isUserExit.password) {
            let payload = {
                user: isUserExit.id,
            }
           jwt.sign(payload,'jwtpassword',{expiresIn:4600000000},
           (err,token)=>{
            if(err) throw err;
            return res.json({ token }) 

           })
        }
        else{
            return res.send("password not matched")
        }
        
    }
 
})



app.post("/login", async (req, res) => {
    const { email1, password } = req.body
    const isUserExit= await userData.findOne({email1,password})

   

    if (isUserExit) {
        // const ispaswordmatched = await bcrypt.compare(password, isUserExit.password)
        if (password === isUserExit.password) {
            let payload = {
                user: isUserExit.id,
            }
           jwt.sign(payload,'jwtpassword',{expiresIn:4600000000},
           (err,token)=>{
            if(err) throw err;
            return res.json({ token }) 

           })
        }
        else{
            return res.send("password not matched")
        }
        
    }
 
})





// profile start ra

// app.post("/profile", async (req, res) => {
//     console.log(req.body);

//     try {

//         const isUserExist = await profileData.findOne({ email1: req.body.email1 })



//         if (!isUserExist) {


//             const {
//                 fullname1,
//                 state1,
//                 currentLocation1,
//                 mobile1,
//                 email1
//             } = req.body;


//             let newUser = new profileData({
//                 fullname1: fullname1,
//                 state1: state1,
//                 currentLocation1: currentLocation1,
//                 mobile1: mobile1,
//                 email1: email1

//             })
//             newUser.save();
//             res.send("User Created Sucessfully")
//         }
//         else {
//             if (isUserExist) {
//                 return res.send("user already Unnadu")
//             }
//         }

//     }
//     catch (e) {
//         console.log(e.message);
//         return res.send("internel Error")
//     }
// });


// app.post("/regsignup", async (req,res) =>{
//     console.log(req.body);
//     try{
//         const {
//             type,
//             name,
//             email,
//             contactNumber,
//             password,
//             confirmpassword

//         }=req.body

//     }
//     catch (e) {

//     }
// });










app.listen(3010, () => {
    console.log("Wifi Connected Now")
})





