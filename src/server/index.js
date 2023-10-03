const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./mongoose")
const profileData = require("./mongoose")
const middleware = require('./middleware')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt');
const resumeData = require("./scemap");
// const multer = require("multer");
// const path = require("path");
// const fs= require('fs')


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

// resume headline 1

app.post ("/headline" ,middleware, async(req,res) =>{
    try {
        const {resumeheadline} = req.body

        let newUser= new resumeData({
            resumeheadline : resumeheadline,
        }

        )
        const isUserExit= await resumeData.findOne({resumeheadline:resumeheadline})

        if (isUserExit) {
            return res.send("user already registered")
            
        }


        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );




app.post ("/summery" ,middleware, async(req,res) =>{
    try {
        const {profileSummery} = req.body

        let newUser= new resumeData({
            profileSummery : profileSummery,
        }

        )
        const isUserExit= await resumeData.findOne({profileSummery:profileSummery})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );


app.post ("/keyskill" ,middleware, async(req,res) =>{
    try {
        const {keyskill} = req.body

        let newUser= new resumeData({
            keyskill : keyskill,
        }

        )
        const isUserExit= await resumeData.findOne({keyskill:keyskill})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );

app.post ("/uiandux" ,middleware, async(req,res) =>{
    try {
        const {uitotalEXp,uifromdate,describeJob,currentCTC,uitilldate} = req.body

        let newUser= new resumeData({
            uitotalEXp :uitotalEXp,
            uifromdate: uifromdate,
            describeJob: describeJob,
            currentCTC :currentCTC,
            uitilldate : uitilldate
        }

        )
        // const isUserExit= await resumeData.findOne({uitotalEXp:uitotalEXp})

        // if (isUserExit) {
        //     return res.send("user already registered")
            
        // }
      
        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );

app.post ("/education" ,middleware, async(req,res) =>{
    try {
        const {educationDegree,university,educationyear} = req.body

        let newUser= new resumeData({
            educationDegree :educationDegree,
            university: university,
            educationyear: educationyear,
        }

        )
        // const isUserExit= await resumeData.findOne({uitotalEXp:uitotalEXp})

        // if (isUserExit) {
        //     return res.send("user already registered")
            
        // }
      
        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );

app.post ("/project" ,middleware, async(req,res) =>{
    try {
        const {projecttitle,projectdescription,projectgithublink} = req.body

        let newUser= new resumeData({
            projecttitle : projecttitle,
            projectdescription:projectdescription,
            projectgithublink:projectgithublink,

        }

        )
        const isUserExit= await resumeData.findOne({projecttitle:projecttitle})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );

app.post ("/worksample" ,middleware, async(req,res) =>{
    try {
        const {worksample} = req.body

        let newUser= new resumeData({
            worksample : worksample,
        }

        )
        const isUserExit= await resumeData.findOne({worksample:worksample})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );

app.post ("/paper" ,middleware, async(req,res) =>{
    try {
        const {papertitle,paperauthor,paperpublicationdate} = req.body

        let newUser= new resumeData({
            papertitle : papertitle,
            paperauthor:paperauthor,
            paperpublicationdate:paperpublicationdate,

        }

        )
        const isUserExit= await resumeData.findOne({papertitle:papertitle})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );
app.post ("/Presentation" ,middleware, async(req,res) =>{
    try {
        const {preaentationtitle,presentationspeaker,presentiondate} = req.body

        let newUser= new resumeData({
            preaentationtitle : preaentationtitle,
            presentationspeaker:presentationspeaker,
            presentiondate:presentiondate,

        }

        )
        const isUserExit= await resumeData.findOne({preaentationtitle:preaentationtitle})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );
app.post ("/patent" ,middleware, async(req,res) =>{
    try {
        const {accpatent} = req.body

        let newUser= new resumeData({
            accpatent : accpatent,
        }

        )
        const isUserExit= await resumeData.findOne({accpatent:accpatent})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );
app.post ("/certification" ,middleware, async(req,res) =>{
    try {
        const {certificationname,certificationorganization,certificationdate} = req.body

        let newUser= new resumeData({
            certificationname : certificationname,
            certificationorganization:certificationorganization,
            certificationdate:certificationdate,

        }

        )
        const isUserExit= await resumeData.findOne({certificationname:certificationname})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );
app.post ("/DesiredCareerProfile" ,middleware, async(req,res) =>{
    try {
        const {desireindustry,desiredesignation,DesiredtoShift,PreferedLocation,desireExpectedCTC,desireEmploymenttype } = req.body

        let newUser= new resumeData({
            desireindustry : desireindustry,
            desiredesignation:desiredesignation,
            DesiredtoShift:DesiredtoShift,
            PreferedLocation : PreferedLocation,
            desireExpectedCTC:desireExpectedCTC,
            desireEmploymenttype:desireEmploymenttype,


        }

        )
        const isUserExit= await resumeData.findOne({desireindustry:desireindustry})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );
app.post ("/PersonalDetails" ,middleware, async(req,res) =>{
    try {
        const {DateOfBirth,Age,Gender,MaritalStatus,Languages,personalEmploymenttype } = req.body

        let newUser= new resumeData({
            DateOfBirth : DateOfBirth,
            Age:Age,
            Gender:Gender,
            MaritalStatus : MaritalStatus,
            Languages:Languages,
            personalEmploymenttype:personalEmploymenttype,


        }

        )
        const isUserExit= await resumeData.findOne({DateOfBirth:DateOfBirth})

        if (isUserExit) {
            return res.send("user already registered")
            
        }

        newUser.save();
        return res.send("user created sucessfully")
    }
    catch(e){
        console.log(e.message)
        res.send ("internal server error")
    }

} );

// mongoose.connect("mongodb://localhost:27017/your-database-name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const pdfSchema = new mongoose.Schema({
//   filename: String,
//   data: Buffer,
// });

// const PdfModel = mongoose.model("Pdf", pdfSchema);

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Specify the directory where uploaded files will be stored
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // Rename the uploaded file with a unique name
//   },
// });

// const upload = multer({ storage });

// app.post("/uploadpdf", upload.single("pdf"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const pdf = new PdfModel({
//       filename: req.file.filename,
//       data: req.file.buffer,
//     });

//     await pdf.save();

//     res.status(200).json({ message: "PDF uploaded successfully" });
//   } catch (error) {
//     console.error("Error uploading PDF:", error);
//     res.status(500).json({ message: "Failed to upload PDF" });
//   }
// });








app.listen(3010, () => {
    console.log("Wifi Connected Now")
})





