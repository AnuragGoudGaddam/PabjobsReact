// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
// import { ToastContainer,toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const CandateProfile =()=>{
//     const [fullname1, setfullname1] = useState("");
//     const [state1, setstate1] = useState("");
//     const [currentLocation1, setcurrentLocation1] = useState("");
//     const [mobile1, setmobile1] = useState("");
//     const [email1, setemail1] = useState("");



//     const [data, setdata] = useState([]);

//     console.log(fullname1);

//     const usersData = {


//         fullname1:fullname1,
//         state1:state1,
//         currentLocation1:currentLocation1,
//         mobile1:mobile1,
//         email1:email1

//     };

//     console.log(usersData);



//     const onSubmitForm = (e) => {
//         e.preventDefault();
//         if (

//             fullname1 &&
//             state1 &&
//             currentLocation1 &&
//             mobile1 &&
//             email1 !==""

//         )
//          {
//             // const headers ={
//             //     token:
//             //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkM2NmNzY1ODA0N2Q0NTViYTY5Y2E4IiwiaWF0IjoxNjkyOTU3NDEzLCJleHAiOjYyOTI5NTc0MTN9.iloFyLG120xYhjKmuNAr4qdlR_IH2AcDICpOD1LQUEA"
//             // }
//             axios
//                 .post("http://localhost:3010/profile/", usersData)
//                 .then((response) => {
//                     setdata(response.data);

//                     console.log(response.data)
//                     if (response.status === 200) {

//                         toast.success("Registration Successfull", {
//                             position: "top-right",
//                             autoClose: 1000,
//                             hideProgressBar: false,
//                             closeOnClick: true,
//                             pauseOnHover: true,
//                             draggable: true,
//                             progress: undefined,
//                             theme: "colored"
//                         });
//                     }

//                 })
//                 .catch((error) => {
//                     console.log(error.message);
//                 });
//         }

//         else {
//             toast.warning("Enter the Required Details");

//         }
//     };
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios, { Axios } from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function CandateProfile() {
    const [fullname1, setfullname1] = useState("");
    const [state1, setstate1] = useState("");
    const [currentLocation1, setcurrentLocation1] = useState("");
    const [mobile1, setmobile1] = useState("");
    const [email1, setemail1] = useState("");

    const [data, setdata] = useState([]);
    console.log(fullname1);
    let navigate = useNavigate();

    const useData = {
        fullname1: fullname1,
        state1: state1,
        currentLocation1: currentLocation1,
        mobile1: mobile1,
        email1: email1

    };
    console.log(useData);

    const [error, setErrorMessage] = useState([]);
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [nameError, setNameError] = useState("");
    const [mobileNumberError, setMobileNumberError] = useState("");

    const validateName = (value) => {
        if (!/^[A-Za-z ]+$/.test(value)) {
            setNameError("Name should only contain letters");
        } else {
            setNameError("");
        }
    };

    const validateMobileNumber = (value) => {
        if (!/^\d{10}$/.test(value)) {
            setMobileNumberError("Mobile number should be 10 digits");
        } else {
            setMobileNumberError("");
        }
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        validateName(newName);
    };

    const handleMobileNumberChange = (e) => {
        const newNumber = e.target.value;
        setMobileNumber(newNumber);
        validateMobileNumber(newNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameError && !mobileNumberError && name && mobileNumber) {
            // Perform your submit logic here
            setErrorMessage("Form submitted successfully");
        } else {
            setErrorMessage("Form submission failed. Please check errors.");
        }

        if (
            fullname1 &&
            state1 &&
            currentLocation1 &&
            mobile1 &&
            email1 !== "") {

            axios
                .post("http://localhost:3010/profile/", useData)
                .then((response) => {
                    setdata(response.data);

                    console.log(response.data);
                    if (response.status === 200) {
                        toast.success("Registration Successfull", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setTimeout(function () {

                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            toast.warning("Enter the Required Details");
        }
    };





    return (
        <div>
            <div class="container">
                <div class="row ">
                    <div class="col-md-2"></div>
                    <div class="col-md-3 col-12">
                        <div class="d-grid card"> <img
                            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                            width="250px" alt="" /></div>
                        <div class="d-grid form-control " id="JobsByLocation">
                            <a href="profileJobs.html"> <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Candidate Profile</button></a>
                        </div>

                        <div class="d-grid form-control " id="JobsByLocation">
                            <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Resume</button>
                        </div>

                        <div class="d-grid form-control " id="JobsByCompany">
                            <a href="AppliedJobs.html" > <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Applied Jobs</button></a>
                        </div>

                        <div class="d-grid form-control" id="JobsByCategarey">
                            <a href="jobAlerts.html"> <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Job Alerts</button></a>
                        </div>

                        <div class="d-grid form-control " id="JobsByDesignation">
                            <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Saved jobs</button>
                        </div>

                        <div class="d-grid form-control " id="JobsBySkills">
                            <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Change Password </button>
                        </div>
                        <div class="d-grid form-control " id="JobsBySkills">
                            <button type="button" style={{ color: 'black', fontSize: 'x-small', borderRadius: '2px' }}
                                class="btn  btn-block">Log Out </button>
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
                        <ToastContainer />

                    </div>
                   
                     


                        <div class=" col-md-6 p-2" id="pabJobsON" style={{ fontSize: 'small', marginBottom: '200' }} onClick={handleSubmit}  >
                            <div class="row">
                                <div class=" col-12  card   ">
                                    <h5 class="m-1">Basic Information</h5>
                                    <hr />
                                    <label>Name</label><br />
                                    <input class="form-control" type="text" style={{ fontSize: 'small' }}
                                        placeholder="Enter your full name" onChange={(e) => setfullname1(e.target.value)} value={fullname1} />
                                    <label>Experienced</label><br />
                                    <div class="d-flex flex-row">
                                        <div class=" px-1"> <input class="" type="radio" /><label>Fresher</label> </div>
                                        <div class=" px-1"> <input class="" type="radio" /><label>Experienced</label> </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="col-md-5 col-12">
                                            <label>State</label><br />
                                            <div class="d-flex flex-row form-control col-md-5 "
                                                style={{ border: '1px solid lightblue', backgroundColor: 'white' }}>
                                                <span><input class="dropdown-toggle " style={{ border: 'none', fontSize: 'small' }}
                                                    type="text" placeholder="Select your State  " onChange={(e) => setstate1(e.target.value)} value={state1} /></span>
                                                <span style={{ marginLeft: '-15px' }}  > <i class="fa-solid fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-md-5 px-3 col-12">
                                            <label>Current Location</label><br />
                                            <div class="d-flex flex-row form-control col-md-5"
                                                style={{ border: '1px solid lightblue', backgroundColor: 'white' }}>
                                                <span><input class="dropdown-toggle " style={{ border: 'none', fontSize: 'small' }}
                                                    type="text" placeholder="Select your Location " onChange={(e) => setcurrentLocation1(e.target.value)} value={currentLocation1} /></span>
                                                <span sstyle={{ marginLeft: '-15px' }}> <i class="fa-solid fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="col-md-5 col-12">
                                            <label>Mobile Number</label><br />
                                            <div class="d-flex flex-row form-control col-md-5"
                                                style={{ border: '1px solid lightblue', backgroundColor: 'white' }}>
                                                <span><input class="dropdown-toggle " style={{ border: 'none', fontSize: 'small' }}
                                                    type="text" placeholder="Enter Your Mobile Number " onChange={(e) => setmobile1(e.target.value)} value={mobile1} /></span>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-12 px-4">
                                            <label>Email</label><br />
                                            <div class="d-flex flex-row form-control col-md-5"
                                                style={{ border: '1px solid lightblue', backgroundColor: 'white' }}>
                                                <span><input class="dropdown-toggle " style={{ border: 'none', fontSize: 'small' }}
                                                    type="text" placeholder="Enter your Email " onChange={(e) => setemail1(e.target.value)} value={email1} /></span>
                                            </div>
                                        </div>
                                    </div>


                                    <button class="col-3 m-3"
                                        style={{ backgroundColor: ' #270d44', color: 'white', borderRadius: '10px' }}>Update
                                        Details</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default CandateProfile;