import React from "react";
import axios from "axios";
import Header from "./headder";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    let navigate = useNavigate();
    const [data, setdata] = useState([]);

    console.log(email);

    const usersData = {

        email: email,
        password: password,
    };

    console.log(usersData);



    const onSubmitForm = (e) => {
        e.preventDefault();
        if (

            email &&

            password !== ""
        ) {
            axios
                .post("http://localhost:3010/login/", usersData)
                .then((response) => {
                    setdata(response.data);

                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem("token", response.data.token)
                        console.log(response.data.token);

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
                            navigate('/home')
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

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-5">
                        <img className="col-md-2 col-6" src="https://play-lh.googleusercontent.com/73eFZhQXdDIiomGikoBpa-XZZf9-_1gkxrpoTFDZ0XzGMzEP0jcR09CC0Ma7UwSwgeDN" />
                    </div>
                </div>
            </div>

            <div className="p-2 loginForm ">
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
                <div className="row ">
                    <div className="col-12 col-md-2"></div>
                    <div className=" col-12 col-md-5 bodySide " >


                        <div className="container">
                            <div className="row">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-9">
                                        <h1 className="container2heading px-3" >Login</h1>
                                        <p className="container2para" style={{ color: "blue" }}>it only takes a couple of minutes to get started!</p>

                                        <p >Dont have an account  <Link to="/register"> <span style={{ color: "blue" }} >Signup</span> </Link> </p>
                                    </div>
                                </div>

                                <form onSubmit={onSubmitForm}>

                                    <div> <label className="label1">Email ID</label> </div>
                                    <input className="inputs form-control" type="email" style={{ border: '1px solid #270d44', borderRadius: '10px' }} placeholder="Enter your Emailid" id="email" onChange={(e) => setemail(e.target.value)} /><br />
                                    <div><label className="label1">Passsword</label></div>
                                     <input
                                        type="password"
                                        className='form-control'
                                        style={{ border: "1px solid #270d44" }}
                                        placeholder="Enter your password"
                                        id="password"
                                        onChange={(e) => setpassword(e.target.value)}
                                        value={password}
                                    />


                                    <button className="btn mt-2 form-control" style={{ border: "px solid black", color: "white", backgroundColor: "#270d44" }} >Login</button>
                                    <p className="mt-2" style={{ textAlign: "center", color: "blue" }}>Login Via Otp</p>
                                </form>
                                <div>
                                    <div class="row mt-2">
                                        <div class="col-md-3 mb-2"></div>
                                        <button class="  col-md-6 col-12 btn "
                                            // style=" border-radius: 10px;background-color: #fff;" st >
                                            style={{ borderRadius: "10px", backgroundColor: "#ffff" }}   >
                                            <i class="fa-brands fa-google  " style={{ color: '#3cba54' }}  ></i> Sign in with Google</button>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 d-none d-md-block">
                        <div class=" col-12 col-md-8 ">
                            <div class=" card1 shadow" >
                                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                                    width="300px" height="220px" alt="" id="image" style={{ borderRadius: '20px' }} />
                            </div>
                        </div>
                        <div class="card1para col-12 mt-2">
                            <i class="fa-solid fa-circle-check m-2 jan"></i> <span class="iconpara">Build your profile and let recutries find you</span> <br />
                            <i class="fa-solid fa-circle-check m-2 jan"></i> <span class="iconpara">Get job posting deliverd right to your email</span> <br />
                            <i class="fa-solid fa-circle-check m-2 jan"></i> <span class="iconpara"> Find a job and grow your career</span>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LoginPage;