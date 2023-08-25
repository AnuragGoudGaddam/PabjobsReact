import React from "react";
// import { useNavigate } from "react-router-dom";
import Header from "./headder";
import Footer from "./footer";
// import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <Header />
            <div class="container blayer p-1">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-12 col-md-8 ">
                        <div class="row">
                            <div class="col-5"> </div>
                            <div class="col-2">
                                <p>Home Jobs</p>
                            </div>
                            <div class="col-4"> </div>
                        </div>
                        <div class="input-group mb-3 p-2">

                            <div class="col-md-4 col-12 d-flex flex-row w-50 "
                                style={{ backgroundColor: "white", height: "40px", width: "150px", borderRadius: "10px" }} >

                                <span className="px-1 mt-1"> <i class="fa-solid fa-magnifying-glass "></i> </span>
                                <span className="px-5 mt-1 "><input class="w-100 dropdown-toggle"
                                    style={{ border: "none", fontSize: "small", width: " 250px" }} type="text"
                                    placeholder="job Title, Skills or company " /></span>
                                <span class="px-5"> <i class="fa-solid fa-caret-down"></i></span>
                            </div>
                            <div class="col-md-4 col-12 d-flex flex-row w-50"
                                style={{ backgroundColor: "white", height: "40px", width: "150px", borderRadius: "10px" }}>
                                <span className="px-1 mt-1"> <i class="fa-solid fa-location-dot"></i> </span>
                                <span className="px-5 mt-1 "><input class="w-100 dropdown-toggle"
                                    style={{ border: "none", fontSize: "small", width: " 250px" }} type="text"
                                    placeholder="job Title, Skills or company " /></span>
                                <span class="px-5"> <i class="fa-solid fa-caret-down"></i></span>
                            </div>
                        </div>
                        <div class=" col-md-2"> </div>
                        <div class="row m-1">
                            <div className="col-5 "> </div>
                            <div class="col-5">
                                <button style={{ backgroundColor: "#270d44", borderRadius: "5px", color: " #ffff" }}>Search</button>
                            </div>
                            <div className="col-4"> </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-1">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-12">
                        <div className="row p-1  shadow">
                            <p>Top Searches</p>

                            <div className="col-md-2 ">
                                <button className="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Banking</button>
                            </div>
                            <div class="col-md-1">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>sales</button>
                            </div>

                            <div class="col-md-2 ">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Hr
                                    Executive</button>
                            </div>
                            <div class="col-md-2">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Manual
                                    Testing</button>
                            </div>
                            <div class="col-md-1 ">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>IT</button>
                            </div>
                            <div class="col-md-2 ">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Devops
                                    Engineer</button>
                            </div>
                            <div class="col-md-2">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Digital
                                    Marketing</button>
                            </div>


                            <div class="col-md-2">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Graphic
                                    Design</button>
                            </div>
                            <div class="col-md-2 ">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Data Analyst
                                </button>
                            </div>
                            <div class="col-md-2 ">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Accounting</button>
                            </div>
                            <div class="col-md-3">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Software
                                    Engineer</button>
                            </div>
                            <div class="col-md-2 ">
                                <button class="form-control"
                                    style={{ color: " #270d44", backgroundColor: "#f8f2f8", fontSize: " x-small" }}>Accounting</button>
                            </div>
                            <div class="row p-1">
                                <div class="col-9"></div>
                                <div class="col-3 ">
                                    <p style={{ fontSize: " x-small" }}> <i class="fa-solid fa-arrow-right"></i> View All Companies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" container-fluid " id="pabJobsON" style={{ backgroundColor: "#f8f2f8" }}>
                <div class="row ">
                    <div class="col-3"></div>
                    <div class=" col-4">
                        <p style={{ color: "#270d44" }}>Search By Location</p>
                    </div>
                    <div class=" d-flex flex-row">

                        <div class="col-3"></div>



                        <div class="col-md-1 col-6 p-2">
                            <button className="form-control shadow" style={{ fontSize: "xx-small", justifyContent: "space-evenly" }}><img
                                style={{ color: "#270d44" }}
                                src="https://cdn.dribbble.com/users/1486936/screenshots/6192116/media/bbba1ba5b14100d0238ed41932d77933.png?resize=400x0"
                                width="12px" height="15px" alt="" />Hyderabad</button>
                        </div>
                        <div class="col-md-1 col-6 p-2  ">
                            <button className="form-control shadow" style={{ fontSize: "xx-small", justifyContent: "space-evenly" }}><img
                                style={{ color: "#270d44" }} src="https://static.thenounproject.com/png/591250-200.png"
                                width="10px" height="20px" alt="" />Mumbai</button>
                        </div>
                        <div class="col-md-1 col-6 p-2  ">
                            <button className="form-control shadow" style={{ fontSize: "xx-small", justifyContent: "space-evenly" }}><img
                                style={{ color: "#270d44" }}
                                src="https://cdn.iconscout.com/icon/free/png-256/free-chennai-119687.png" width="10px"
                                height="20px" alt="" />Chennai</button>
                        </div>

                        <div className="col-md-1 col-6 p-2  ">
                            <button className="form-control shadow" style={{ fontSize: " xx-small", padding: "2px" }}><img
                                style={{ color: "#270d44" }}
                                src="https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Pune-512.png"
                                width="26px" height="27px" alt="" /> Pune </button>
                        </div>
                        <div class="col-md-1 col-6 p-2   ">
                            <button class="form-control shadow" style={{ fontSize: " xx-small" }}><img style={{ color: "#270d44" }}
                                src="https://static.thenounproject.com/png/2165510-200.png" width={"10px"}
                                height={"18px"} alt="" />Banglore</button>
                        </div>
                        <div className="col-md-1 p-2 col-6  ">
                            <button className="form-control shadow" style={{ fontSize: " xx-small" }}><img style={{ color: "#270d44" }}
                                src="https://cdn2.vectorstock.com/i/1000x1000/65/91/india-gate-new-delhi-icon-simple-style-vector-7776591.jpg"
                                width={"25px"} height={"20px"} alt="" />Delhi</button>
                        </div>

                    </div>

                    <div class="row p-1">
                        <div className="col-8"></div>
                        <div className="col-4">
                            <p style={{ fontSize: "x-small" }}> <i className="fa-solid fa-arrow-right"></i> View All Companies</p>

                        </div>
                    </div>
                </div>

            </div>



            <div class="container p-2 mt-1">
                <div class="row">


                    <div class="col-md-2">

                    </div>
                    <div class="col-6 col-md-2 card1 shadow">

                        <p style={{ fontSize: "x-small" }}>MNC's </p>
                        <p style={{ color: "#270d44", fontSize: "xx-small" }}>1.5k jobs are avilable</p>
                        <div class="row">
                            <div className="col-3">
                                <img src="https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png" width={"30px"} height={"20px"} alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://assets.turbologo.com/blog/en/2019/12/19084817/Fedex-logo.png" width={"30px"} height={"20px"} alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1024px-Dell_Logo.svg.png"
                                    width={"30px"} height={"20px"} alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://www.tcsion.com/dotcom/TCSSMB/TCS-iON-Logo-RGB-Color.png?v=05.04.00.01"
                                    width="30px" height="20px" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="col-6 col-md-2 card1 shadow">
                        <p style={{ fontSize: "x-small" }}>Banking & finance  </p>
                        <p style={{ color: "#270d44", fontSize: "xx-small" }}>1.5k jobs are avilable</p>
                        <div class="row">
                            <div className="col-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGqh_ArUxvipf02Gyd6d0AALR8zcomoAhO8hBntO7&s"
                                    width="30px" height="20px" alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://i.pinimg.com/originals/ff/d5/31/ffd531a6a78464512a97848e14506738.png"
                                    width="30px" height="20px" alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t=1672905040" width="30px"
                                    height="20px" alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://e7.pngegg.com/pngimages/333/464/png-clipart-kotak-mahindra-bank-logo-horizontal-bank-logos-thumbnail.png"
                                    width="30px" height="20px" alt="" />
                            </div>
                        </div>
                    </div>



                    <div class="col-6 col-md-2 card1 shadow">

                        <p style={{ fontSize: "x-small" }}>FMCG & RETAIL  </p>
                        <p style={{ color: "#270d44", fontSize: "xx-small" }}>1.5k jobs are avilable</p>
                        <div class="row">
                            <div class="col-3">
                                <img src="https://banner2.cleanpng.com/20180421/aoq/kisspng-hindustan-unilever-logo-company-5adba5518a2a31.7900064115243441455659.jpg"
                                    width={"30px"} height={"20px"} alt="" />
                            </div>
                            <div class="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/640px-Procter_%26_Gamble_logo.svg.png"
                                    width={"30px"} height={"20px"} alt="" />
                            </div>
                            <div class="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/en/d/d5/Parle_Products_logo.svg" width={"30px"} height={"20px"} alt="" />
                            </div>
                            <div class="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png"
                                    width={"30px"} height={"20px"} alt="" />
                            </div>
                        </div>
                    </div>


                    <div class="col-6 col-md-2 card1 shadow">

                        <p style={{ fontSize: "x-small" }}>Health care </p>
                        <p style={{ color: "#270d44", fontSize: "xx-small" }}>1.5k jobs are avilable</p>
                        <div class="row">
                            <div class="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Apollo_Hospitals_Logo.svg/800px-Apollo_Hospitals_Logo.svg.png"
                                    width="30px" height="20px" alt="" />
                            </div>
                            <div class="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/KIMS_Main_Logo_Col-01.jpg"
                                    width="30px" height="20px" alt="" />
                            </div>
                            <div class="col-3">
                                <img src="https://www.himss.org/sites/hde/files/media/image/2022/05/18/mims.png" width="30px"
                                    height="20px" alt="" />
                            </div>

                        </div>
                    </div>
                </div>


            </div>



            <div class="container mt-3 ">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8" style={{ backgroundColor: "#270d44", color: "#ffff", fontSize: "x-small" }}>
                        <div class="row">
                            <div class="col-4">
                                <img src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F51AsHLEO6YLvN3uIUQt9WN%2Fc3fb27f272af858c59ae726710c3c96d%2Fcustomer-service-skills.jpg?ixlib=gatsbySourceUrl-2.1.1&auto=format%2C%20compress&s=b01d1730c29752d027f2d7fb83acb012"
                                    width={"150px"} height={"100px"} alt="" />
                            </div>
                            <div class="col-6">
                                <h3>SELL YOUR SKILLS</h3>
                                <p>What if you could use your skill and talent summery?</p>
                                <p>  so that you can live the life you love </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="container col-md-8 col-12 mt-3">
                <div class="row">

                    <div class="col-4">
                        <p style={{ color: "#270d44" }}> Jobs by Companies</p>
                    </div>

                     <div style={{ backgroundColor: "#f8f2f8", padding: "2px" }}>
                    <div class="col-2"></div>
                    <marquee>
                        <div class="row P-1 " >


                            <div class="col-2 m-2" style={{ backgroundColor: "#ffff", padding: "1px" }}>
                                <img src="https://news.harman.com/media/themes/5e30ae5f2cfac23c3e118f1b/images/HARMAN-logo.png"
                                    width={"80px"} height={"30px"} alt="" />
                            </div>
                            <div class="col-2 m-2" style={{ backgroundColor: " #ffff", padding: " 2px" }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png"
                                    width={"80px"} height={"30px"} alt="" />
                            </div>
                            <div class="col-2 m-2" style={{ backgroundColor: " #ffff", padding: " 2px" }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png?20210617123944"
                                    width={"80px"} height={"30px"} alt="" />
                            </div>
                            <div class="col-2 m-2" style={{ backgroundColor: " #ffff", padding: " 2px" }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/2560px-Cognizant_logo_2022.svg.png"
                                    width={"80px"} height={"30px"} alt="" />
                            </div>

                            <div class="col-2 m-2" style={{ backgroundColor: " #ffff", padding: " 2px" }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png"
                                    width={"80px"} height={"30px"} alt="" />
                            </div>



                        </div>
                    </marquee>
                    <div class="col-2"></div>
                    </div>



                </div>
            </div>

            <div class="container col-md-8 col-12 mt-3 p-3 " style={{ backgroundColor: " #f8f2f8" }}>
                <div class="row">
                    <div class="col-md-2 mt-2">
                        <button class="form-control"
                            style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Banking</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control"
                            style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>sales</button>
                    </div>

                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Hr
                            Executive</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control"
                            style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Banking</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control"
                            style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>sales</button>
                    </div>

                    <div class="col-md-2 mt-2 ">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Hr
                            Executive</button>
                    </div>
                    <div class="col-md-2  mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control"
                            style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Banking</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control"
                            style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>sales</button>
                    </div>

                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "xx-small" }}>Hr
                            Executive</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "xx-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2  mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "xx-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Hr
                            Executive</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "x-small" }}>Manual
                            Testing</button>
                    </div>
                    <div class="col-md-2 mt-2">
                        <button class="form-control" style={{ color: "#270d44", backgroundColor: " #ffff", fontize: "xx-small" }}>Manual
                            Testing</button>
                    </div>


                </div>
            </div>
            <div class="container mt-3 ">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8" style={{ color: "#ffff", backgroundColor: " #270d44", fontize: "x-small" }}>
                        <div class="row">
                            <div class="col-4">
                                <img src="https://www.jobsoid.com/wp-content/uploads/2021/04/Top-10-Skills-for-Customer-Service-Jobs-Blog-Image-640x428.jpg"
                                    width={"150px"} height={"100px"} alt="" />
                            </div>
                            <div class="col-6" >
                                <h3>POST YOUR DAY JOB</h3>
                                <p>What if you could use your skill and talent summery?<br />
                                    so that you can live the life you love </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div class="container mt-4 col-md-8 col-12 mb-4" style={{ backgroundColor: " #270d44" }}>
                <div class="row">
                    <nav class="navbar navbar-expand-sm navbar-dark ">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="mynavbar">
                                <p class="p-2" style={{ color: " #fff", fontSize: "small" }}>Find better & faster with pab job services
                                    call : 180072874800 now!</p>
                                <form class="d-flex">
                                    <input class="form-control me-2 px-4 w-50" type="text"
                                        placeholder="Enter your mobile number" />
                                    <button class="btn btn-primary px-4" type="button"
                                        style={{ backgroundColor: "orange", color: " #fff" }}>Get call back </button>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

            <Footer />
        </div>

    )
}
export default Home;
