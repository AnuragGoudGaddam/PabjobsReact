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
                .post("https://pab-server-testing.onrender.com/auth/login", usersData)
                .then((response) => {
                    setdata(response.data);

                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem("token",response.data.token)
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
                            navigate('/browsejobs')
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
            <Header />
            <div className="p-4 loginForm  d-flex flex-row">
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


                        <div className="labels1">
                            <div className=" maincard">
                                <div className=" maincard1">
                                    <h1 className="container2heading">Create an account</h1>
                                    <p className="container2para">it only takes a couple of minutes to get started!</p>

                                    <p>Dont have an account  <Link to="/register"> <span style={{ color: "blue" }} >SignIn</span> </Link> </p>

                                    <form onSubmit={onSubmitForm}>

                                        <label className="label1">Email ID</label><br />
                                        <input className="inputs form-control" type="email" placeholder="Enter your Emailid" id="email" onChange={(e) => setemail(e.target.value)} /><br />
                                        <label className="label1">Passsword</label><br />
                                        <input className="inputs form-control" type="password" placeholder="*****" id="password" onChange={(e) => setpassword(e.target.value)} /><br />
                                        <p style={{ textAlign: "center", color: "blue" }}>Login Via Otp</p>
                                        <button className="btn mt-2" style={{ border: "1px solid black", marginLeft: "190px" }} >Login</button>
                                    </form>
                                    <div>
                                        <div class="row mt-2">
                                            <div class="col-md-4 mb-2"></div>
                                            <button class=" col-md-5 col-12"
                                                // style=" border-radius: 10px;background-color: #fff;" st >
                                                style={{ borderRadius: "10px", backgroundColor: "#ffff",marginRight:"-40px" }}   >
                                                <i class="fa-brands fa-google p-1 "></i> Sign in with Google</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div class=" col-md-2 p-1 imageDiv d-none d-md-block ">
                        <div class="row">
                            <div> <img id="image1"
                                src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                                width="300px" height="300" style={{ borderRadius: "10px" }} /> </div>
                            <div className="col-12">
                                <div className="e d-flex flex-row"> <i style={{ marginTop: " 2px" }}
                                    className="fa-solid fa-circle-check"></i>
                                    <p style={{ marginLeft: " 20px" }}>Build your profile and let recutries find you
                                    </p>
                                </div>
                                <div className="e d-flex flex-row"><i style={{ marginTop: " 2px" }} className="fa-solid fa-circle-check"></i>
                                    <p style={{ marginLeft: " 20px" }}>Get job posting deliverd right to your email</p>
                                </div>
                                <div className="e d-flex flex-row"> <i style={{ marginTop: " 2px" }}
                                    className="fa-solid fa-circle-check"></i>
                                    <p style={{ marginLeft: " 20px" }}>Find a job and grow your career</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LoginPage;