
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./headder";
import Footer from "./footer";

const AccountCreation = () => {
    const [type, settype] = useState("applicant")

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    


    let navigate = useNavigate();
    const [data, setdata] = useState([]);

    console.log(name);

    const usersData = {
        type: type,
        name: name,
        email: email,
        contactNumber: contactNumber,
        password: password,
        confirmpassword  : confirmpassword
    };

    console.log(usersData);



    const onSubmitForm = (e) => {
        e.preventDefault();
        if (
            name &&
            email &&
            contactNumber &&
            password &&
            confirmpassword !== ""
        ) {
            axios
                .post("https://pab-server-testing.onrender.com/auth/signup", usersData)
                .then((response) => {
                    setdata(response.data);

                    console.log(response.data)
                    if (response.status === 200) {

                        toast.success("Registration Successfull", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored"
                        });


                        setTimeout(function () {
                            navigate('/')
                        }, 3000)

                    }

                })
                .catch((error) => {
                    console.log(error.message);
                });
        }

        else {
            toast.warning("Enter the Required Details");

        }
    };

    console.log(type)


    return (
        <div>
           <Header/>
           


            <div className="container  ">


                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-12 col-md-6">
                        <div className="card shadow mt-5 logincard">
                            <div className="col-12 text-center">
                                <h2>Create an account</h2>
                                <p className="parastart">it only takes a couple of minutes to get started!</p>
                            </div>
                            <div className=" text-center reactbtngroup">
                                <a href="./Login"><button className="w-25 reactloginbtn shadow mx-1 btn">Login</button></a>
                                <button className="w-25 reactloginbtn shadow btn">Signup<i class="fa-solid fa-circle-check "></i></button>
                            </div>
                            <div className=" text-center reactbtngroup mt-3 mb-3">

                                <a href=""> <button className="w-25 reactloginbtn1 shadow btn">Job seekers<input type="radio" name="type" value="applicant" onChange={((e) => settype(e.target.value))}></input></button></a>
                                <a href=""><button className="w-25 reactloginbtn shadow btn">Recruiters <input type="radio" name="type" value="recruiter" onChange={((e) => settype(e.target.value))}></input></button></a>
                            </div>

                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            {/* Same as */}
                            <ToastContainer />
                            <form class="form p-5" onSubmit={onSubmitForm}>

                                <label for="" id="fullname" class="loginlabel">{type === "applicant" ? "Fullname" : "Company Name"}</label>
                                <input type="text" class=" form-control" placeholder={type === "applicant" ? "Enter your full name" : "Enter Company Name"} id="input" onChange={(e) => setname(e.target.value)} value={name} />

                                <label for="" class="loginlabel" >Email ID</label>
                                <input type="email" class="form-control " placeholder="enter your Email ID" id="input" onChange={(e) => setemail(e.target.value)} value={email} />

                                <label for="" class="loginlabel" >Mobile Number</label><br />
                                <div class="d-flex flex-row">
                                    <select name="" id="input" className="mx-1">
                                        <option value="" >+91</option>
                                    </select>

                                    <input type="text" class="form-control " placeholder="Enter your mobile number" id="input" onChange={(e) => setcontactNumber(e.target.value)} value={contactNumber} />
                                </div>
                                <label for="" class="loginlabel" >Password</label>
                                <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input" onChange={(e) => setpassword(e.target.value)} value={password} />

                                <label for="" class="loginlabel" >confirm Password</label>
                                <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input" onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword} />

                                <div id="gender">
                                    <b>Gender</b> <br /><input type="radio" name="type" /> male <input type="radio" name="type" /> female
                                    <input type="radio" name="type" /> prefer not to say<br />
                                </div>
                                <i class="fa-solid fa-square-check greenbox"></i>
                                <label for="">I would like to get latest updates on whatsapp</label>

                                <p class="smallpara">By clicking Register,you agree to the terms and conditions & privacy  pabjobs.com
                                </p>
                                <button class="Registerbtn btn" style={{border:"1px solid black"}}>Register Now</button>
                            </form>
                        </div>

                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div class=" col-12 col-md-3 mt-5">
                        <div class="card card1 shadow" >
                            <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                                width="200px" height="200px" alt="" id="image" />
                        </div>
                        <div class="card1para">
                            <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Build your profile and let
                                recruitrs find yon</span> <br />
                            <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Get job posting delivered right
                                to your email</span> <br />
                            <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Find a job and grow your
                                career</span>

                        </div>
                    </div>




                </div>

            </div>
          
          <Footer/>
        </div>
    )
}
export default AccountCreation;