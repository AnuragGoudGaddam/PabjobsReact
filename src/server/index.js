const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./mongoose")
const profileData=require("./mongoose")

const app = express();
app.use(express.json())

app.use(cors({origin:"*"}))

mongoose.connect("mongodb+srv://anurag:anurag7093@cluster0.a4roxmm.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => console.log("db connected"))
    .catch((err) => console.log(err.message));


app.get("/", (req, res) => {
    res.send("Edi Panchestundi")
})

app.post("/signup", async (req, res) => {
    console.log(req.body);

    try {
        const newUser = {
            "typeofreg": req.body.typeofreg,
            "fullname": req.body.fullname,
            "email": req.body.email,
            "password": req.body.password,
            " mobilenumber": req.body.mobilenumber,
            " gender": req.body.gender

        }
        const userDetails = await userData.create(req.body)
        res.status(200).send("Vachadu Vachadu")
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json("messsage:e.message")

    }
})


// profile start ra

app.post("/profile", async (req, res) => {
    console.log(req.body);

    try {
        const {
            fullname1,
            state1,
            currentLocation1,
            mobile1,
            email1
        } = req.body;


        let newUser = new profileData({
            fullname1: fullname1,
            state1: state1,
            currentLocation1: currentLocation1,
            mobile1: mobile1,
            email1: email1

        })
        const isUserExist = await profileData.findOne({ email1: email1})
       if (isUserExist) {
        return res.send("user already Unnadu")
       }
       newUser.save();
       res.send("User Created Sucessfully")       
    }
    catch (e) {
        console.log(e.message);
        return res.send("internel Error")
    }
});










app.listen(3010, () => {
    console.log("Wifi Connected Now")
})





