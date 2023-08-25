import React from "react";
import '../App.css'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../headder";
import Footer from "../footer";

const JobsMain = () => {
    return (
        <div>

<Header/>

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
                        <div className="row" >
                            <div className="col-md-4 col-12 d-flex flex-row m-3 "
                                style={{ backgroundColor: 'white', height: '40px', width: '320px', borderRadius: '10px', marginLeft: '150px' }}>
                                <span class="px-1 mt-1"> <i class="fa-solid fa-location-dot"></i> </span>
                                <span class="px-5 mt-1 "><input
                                    className="w-100 dropdown-toggle"
                                    style={{ border: 'none', fontSize: 'small', width: '250px' }}
                                    type="search"


                                    placeholder="Enter location"
                                />
                                    {/* {browsejobss.map((blog) => setUserEnteredText(e.target.value)} */}
                                </span>
                                <span class="px-3"> <i class="fa-solid fa-caret-down"></i></span>
                            </div>
                            <div class="col-md-4 col-12 d-flex flex-row   m-3"
                                style={{ backgroundColor: 'white', height: '40px', width: '320px', borderRadius: '10px', marginLeft: '150px' }}>
                                <span class="px-1 mt-1"> <i class="fa-solid fa-location-dot"></i> </span>
                                <span class="px-5 mt-1 ">  <span class="px-5 mt-1 "><input
                                    className="w-100 dropdown-toggle"
                                    style={{ border: 'none', fontSize: 'small', width: '250px' }}
                                    type="search"

                                    placeholder="Enter location"
                                />
                                    {/* {browsejobss.map((blog) => setUserEnteredText(e.target.value)} */}
                                </span></span>
                                <span class="px-3"> <i class="fa-solid fa-caret-down"></i></span>
                            </div>
                        </div>
                        <div class=" col-md-2"> </div>
                        <div class="row m-1">
                            <div class="col-5 "> </div>
                            <div class="col-5">
                                <button style={{ backgroundColor: '#270d44', borderRadius: '5px', color: '#ffff' }}>Search</button>
                            </div>
                            <div class="col-4"> </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row p-2">
                    <div class="col-md-2"></div>
                    <div class="col-md-2 col-12">
                        <div class="d-grid form-control " id="allJobs" style={{ backgroundColor: '#270d44' }}>
                            <a href="jobsbyCagegory"> <button type="button" style={{ color: '#ffff', fontSize: 'x-small', border: 'none' }}
                                class="btn form-control">All Jobs</button></a>
                        </div>

                        <div class="d-grid form-control " id="JobsByLocation">
                            <a href="jobcardsLLoc"> <button type="button" style={{ color: 'black', fontSize: 'x-small', border: 'none' }}
                                class="btn  btn-block">Jobs By location</button> </a>
                        </div>

                        <div class="d-grid form-control " id="JobsByCompany">
                            <a href="jobbycompany">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: 'none' }}
                                class="btn  btn-block">Jobs By Company</button> </a>
                        </div>

                        <div class="d-grid form-control" id="JobsByCategarey">
                            <a href="jobsbyCagegory"> <button type="button" style={{ color: 'black', fontSize: 'x-small', border: 'none' }}
                                class="btn  btn-block">Jobs By Categary</button> </a>
                        </div>

                        <div class="d-grid form-control " id="JobsByDesignation">
                            <a href="jobsbydesignation">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: 'none' }}
                                class="btn  btn-block">Jobs By Designation</button></a>
                        </div>

                        <div class="d-grid form-control " id="JobsBySkills">
                            <a href="jobsbyskills">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: 'none' }}
                                class="btn  btn-block">Jobs By Skills </button> </a>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" id="pabJobsON">
                        <p style={{ color: '#270d44' }}>Jobs By Location</p>
                        <div class="row m-1">
                            <div class="col-4">
                                <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-evenly', backgroundColor: 'white', color: 'black' }}><img
                                        src="https://cdn.iconscout.com/icon/free/png-256/free-charminar-119682.png" width="25px"
                                        height="25px" alt="" />Hyderabad</Button>
                            </div>
                            <div class="col-4">
                                <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-evenly', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://static.thenounproject.com/png/591250-200.png" width="25px"
                                        height="25px" alt="" />Mumbai</Button>
                            </div>
                            <div class="col-4">
                                <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-evenly', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://cdn.iconscout.com/icon/free/png-256/free-chennai-119687.png" width="25px"
                                        height="25px" alt="" />Chennai</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow" style={{ fontSize: 'small', padding: '2px', backgroundColor: 'white', color: 'black' }}><img
                                    style={{ color: '#270d44' }}
                                    src="https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Pune-512.png"
                                    width="26px" height="27px" alt="" /> Pune </Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow" style={{ fontSize: 'x-small', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                    src="https://static.thenounproject.com/png/2165510-200.png" width="25px"
                                    height="20px" />Banglore</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow" style={{ fontSize: 'x-small', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                    src="https://cdn2.vectorstock.com/i/1000x1000/65/91/india-gate-new-delhi-icon-simple-style-vector-7776591.jpg"
                                    width="25px" height="20px" />Delhi</Button>
                            </div>

                        </div>
                        <div class="row p-1">
                            <div class="col-9"></div>
                            <div class="col-3">
                                <p style={{ fontSize: 'x-small' }}> <i class="fa-solid fa-arrow-right"></i> View All locations</p>

                            </div>
                        </div>
                        <hr style={{ marginTop: '-10px' }} />

                        <p style={{ color: '#270d44' }}> Jobs by Companies</p>
                        <marquee behavior="" direction="">
                            <div class="row P-1" style={{ backgroundColor: '#f8f2f8', padding: '2px' }}>


                                <div class="col-2 m-2" style={{ backgroundColor: '#ffff', padding: '1px' }}>
                                    <img src="https://news.harman.com/media/themes/5e30ae5f2cfac23c3e118f1b/images/HARMAN-logo.png"
                                        width="80px" height="30px" alt="" />
                                </div>
                                <div class="col-2 m-2" style={{ backgroundColor: '#ffff', padding: '1px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png"
                                        width="80px" height="30px" alt="" />
                                </div>
                                <div class="col-2 m-2" style={{ backgroundColor: '#ffff', padding: '1px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png?20210617123944"
                                        width="80px" height="30px" alt="" />
                                </div>
                                <div class="col-2 m-2" style={{ backgroundColor: '#ffff', padding: '1px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/2560px-Cognizant_logo_2022.svg.png"
                                        width="80px" height="30px" alt="" />
                                </div>

                                <div class="col-2 m-2" style={{ backgroundColor: '#ffff', padding: '1px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png"
                                        width="80px" height="30px" alt="" />
                                </div>

                            </div>

                        </marquee>
                        <div class="row p-1">
                            <div class="col-8"></div>
                            <div class="col-4">
                                <p style={{ fontSize: 'x-small' }}> <i class="fa-solid fa-arrow-right"></i> View All Companies</p>

                            </div>
                        </div>
                        <hr style={{ marginTop: '-10px' }} />

                        <p style={{ color: '#270d44', fontWeight: '600' }}>Jobs By Category</p>
                        <div class="row m-1">
                            <div class="col-4" >
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                        </div>
                        <div class="row p-1">
                            <div class="col-8"></div>
                            <div class="col-4">
                                <p style={{ fontSize: 'x-small' }}> <i class="fa-solid fa-arrow-right"></i> View All Companies</p>

                            </div>
                        </div>
                        <hr style={{ marginTop: '-10px' }} />

                        <p style={{ color: '#270d44', fontWeight: '600' }}>Jobs By Designation</p>
                        <div class="row m-1">
                            <div class="col-4" >
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                        </div>
                        <div class="row p-1">
                            <div class="col-8"></div>
                            <div class="col-4">
                                <p style={{ fontSize: 'x-small' }}> <i class="fa-solid fa-arrow-right"></i> View All Designation</p>

                            </div>
                        </div>
                        <hr style={{ marginTop: '-10px' }} />

                        <p style={{ color: '#270d44', fontWeight: "600" }}>Jobs By Skills</p>
                        <div class="row m-1">
                            <div class="col-4" >
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSjabJsJpnRr-oE0Jt5bm1YRYbQquRDk6mQ&usqp=CAU"
                                        width="25px" height="25px" />Airline</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                        </div>
                        <div class="row m-1">
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                            <div class="col-4">
                            <Button className=" form-control shadow"
                                    style={{ fontSize: 'x-small', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}><img style={{ color: '#270d44' }}
                                        src="https://www.shutterstock.com/shutterstock/photos/551929519/display_1500/stock-vector-alien-call-center-grainy-textured-icon-for-overlay-watermark-stamps-flat-symbol-with-unclean-551929519.jpg"
                                        width="25px" height="25px" />BPO</Button>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-8"></div>
                            <div class="col-4">
                                <p style={{ fontSize: 'x-small' }}> <i class="fa-solid fa-arrow-right"></i> View All Companies</p>

                            </div>
                        </div>
                        <hr style={{ marginTop: '-10px' }} />

                    </div>




                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default JobsMain;