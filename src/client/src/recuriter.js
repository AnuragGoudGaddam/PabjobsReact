
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

const RecuriterCreation = () => {
    // const [type, settype] = useState("applicant")

    const [name, setname] = useState("");
    const [email1, setemail1] = useState("");

    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [contactNumberError, setContactNumberError] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateContactNumber = (value) => {
        if (value === "") {
            setContactNumberError("");
            return false; // Return false to indicate invalid input
        }

        const isValid = /^[6-9]\d{9}$/.test(value);
        setContactNumberError(isValid ? "" : "Please enter 10 numbers");
        return isValid;
    };



    const validatePassword = (value) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValid = passwordRegex.test(value);
        setPasswordError(isValid ? "" : "Password does not meet the requirements");
        return isValid;
    };



    let navigate = useNavigate();
    const [data, setdata] = useState([]);

    console.log(name);

    const usersData = {
        // type: type,
        name: name,
        email1: email1,
        contactNumber: contactNumber,
        password: password,
        confirmpassword: confirmpassword
    };

    console.log(usersData);



    const onSubmitForm = (e) => {
        e.preventDefault();
        if (
            name &&
            email1 &&
            validateContactNumber(contactNumber) &&
            validatePassword(password) &&
            confirmpassword !== ""
        ) {
            axios
                .post("http://localhost:3010/recuriter/", usersData)
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
                            navigate('/recuriter123')
                        }, 3000)

                    }

                })
                .catch((error) => {

                    // Email already exists, show a toast error message
                    toast.error("Email already exists. Please use a different email.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });

                    console.log(error.message);
                });
        }

        else {
            toast.warning("Enter the Required Details");

        }
    };

    console.log(name)


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-1 p-3"></div>
                    <div className="col-5">
                        <img className="col-md-2 col-6" src="https://play-lh.googleusercontent.com/73eFZhQXdDIiomGikoBpa-XZZf9-_1gkxrpoTFDZ0XzGMzEP0jcR09CC0Ma7UwSwgeDN" />
                    </div>
                </div>
            </div>





            <div className="container  ">


                <div className="row">
                    <div className="col-12"></div>
                    <div className="col-md-1" ></div>
                    <div className="col-12 col-md-6" >
                        <div className="card shadow  logincard" style={{ borderRadius: '20px' }}>
                            <div className="col-12 text-center">
                                <h2>Create an account</h2>
                                <p className="parastart">it only takes a couple of minutes to get started!</p>
                            </div>
                            <div className="container">
                                <div className=" text-center reactbtngroup row">
                                    <div className="col-1"></div>

                                    <div className="col-md-5">
                                        <a href="/recuriter123"><button className="form-control reactloginbtn shadow mx-1  ">Login</button></a></div>

                                    <div className="col-md-5">   <button className="col-md-5 form-control reactloginbtn shadow  px-4">Signup<i class="fa-solid fa-circle-check  " style={{ marginLeft: '50px' }}  ></i></button> </div>

                                </div>
                                <div className=" text-center reactbtngroup  row ">
                                    <div className="col-1"></div>

                                    <div className="mt-3"   > <a href="register"><button className={`col-12 col-md-5   shadow btn `} style={{ borderRadius: '10px' }} >Job seekers<input type="radio" name="type" value="applicant" style={{ marginLeft: '50px' }}  ></input></button></a>
                                        <button style={{ color: '#270d44', fontWeight: 'bold', borderRadius: '10px' }} className={`col-12 col-md-5   shadow btn `} >Recruiters <input type="radio" name="type" value="recruiter" style={{ marginLeft: '50px' }} checked ></input></button> </div>
                                </div>
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

                                <label for="" id="fullname" class="loginlabel">Company Name</label>
                                <input type="text" class=" form-control" style={{ border: '1px solid #270d44', borderRadius: "16px" }} placeholder="Enter Company Name " id="input" onChange={(e) => setname(e.target.value)} value={name} />

                                <label for="" class="loginlabel" >Email ID</label>
                                <input type="email1" class="form-control " style={{ border: '1px solid #270d44', borderRadius: "16px" }} placeholder="enter your Email ID" id="input" onChange={(e) => setemail1(e.target.value)} value={email1} />

                                <label htmlFor="contactNumber" className="loginlabel">
                                    Mobile Number
                                </label>
                                <div className="d-flex flex-row">
                                    <select
                                        name=""
                                        id="input"
                                        className="mx-1"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="">+91</option>
                                    </select>
                                    <input
                                        type="text"
                                        className={`form-control ${contactNumberError && contactNumber.length !== 10 ? "is-invalid" : ""
                                            }`}
                                        style={{ border: "1px solid #270d44", borderRadius: "16px" }}
                                        placeholder="Enter your mobile number"
                                        id="contactNumber"
                                        onChange={(e) =>
                                            setContactNumber(e.target.value.replace(/\D/g, '').substring(0, 10))
                                        }
                                        value={contactNumber}
                                    />
                                </div>
                                {contactNumberError && contactNumber.length === 10 && (
                                    <div className="invalid-feedback">
                                        {contactNumberError}
                                    </div>
                                )}
                                {contactNumber.length > 1 && contactNumber.length < 10 &&
                                    (
                                        <div className="text-danger">
                                            Please enter 10 numbers
                                        </div>
                                    )}
                                {contactNumber && !/^[6-9]/.test(contactNumber) && (
                                    <div className="text-danger">
                                        Mobile number must start with 6, 7, 8, or 9
                                    </div>
                                )}
                                <label htmlFor="password" className="loginlabel">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordError ? "is-invalid" : ""
                                        }`}
                                    style={{ border: "1px solid #270d44", borderRadius: "16px" }}
                                    placeholder="Enter your password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                {passwordError && (
                                    <div className="invalid-feedback">
                                        {passwordError}
                                    </div>
                                )}
                                <label for="" class="loginlabel" >Confirm Password</label>
                                {/* <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input" onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword} /> */}

                                {/* <div className="d-flex flex-row" style={{ border: '1px solid #270d44', borderRadius: '10px' }}> <input className="inputs form-control
                                         " type="password" placeholder="Enter your password again" id="input" onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword} style={{ border: 'none' }} /> </div> */}
                                <input
                                    type="password"
                                    className={`form-control ${passwordError ? "is-invalid" : ""
                                        }`}
                                    style={{ border: "1px solid #270d44", borderRadius: "16px" }}
                                    placeholder="Enter your password"
                                    id="password"
                                    onChange={(e) => setconfirmpassword(e.target.value)}
                                    value={confirmpassword}
                                />

                                <button class="Registerbtn btn mt-3" style={{ border: "1px solid black", color: "white", backgroundColor: "#270d44" }}>Register Now</button>
                            </form>
                        </div>

                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-md-4 mt-2  d-none d-md-block" >
                        <div class=" col-12 col-md-8 ">
                            <div class="card card1 shadow" >
                                <img src="https://img.freepik.com/premium-vector/my-order-list-flat-style-illustration-design_538610-623.jpg"
                                    width="280px" height="220px" alt="" id="image" style={{ borderRadius: '20px' }} />
                            </div>
                        </div>
                        <div class="card1para col-12 mt-3">
                            <i class="fa-solid fa-circle-check m-2  jan"></i> <span class="iconpara">Build your profile and let
                                recruitrs find yon</span> <br />
                            <i class="fa-solid fa-circle-check m-2 jan"></i> <span class="iconpara">Get job posting delivered right
                                to your email</span> <br />
                            <i class="fa-solid fa-circle-check m-2 jan"></i> <span class="iconpara">Find a job and grow your
                                career</span>

                        </div>
                    </div>





                </div>

            </div>


        </div>
    )
}
export default RecuriterCreation;