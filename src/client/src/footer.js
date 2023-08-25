import React from 'react';

const Footer = () => {
    return (
      
        
        <div>
       
            {/* <img src={img1} /> */}
            <div class=" container-fluid Footer11 p-1 " style={{backgroundColor:"black" , color: "#ffff"}}>
                <div class="row">
                    <div class="col-12 col-md-2"></div>
                    <div class="d-flex flex-column col-12 col-md-3 ">
                        <img src="data:image/png;base64,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" width="150px" height="60px" style={{ margin: " 10px;" }} />

                        <p>We provide a direct access to the walk-in <br /> opporchunitieas available on the site. Results
                            can
                            <br /> be filtered on the work experiences , venue , form <br /> locations , employer type ,and
                            date
                            range.
                        </p>
                        <div>
                            <p>Toll Free Number:</p>
                            <div class="d-flex flex-row"> <i class="fa-light fa-phone"></i>
                                <p>9885097435870</p>
                            </div>
                        </div>
                    </div>

                    <div class="theUIs col-12 col-md-2">

                        <p>For Candidates</p>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Candate Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">My Resume </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Applied Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">job Alert</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Change Password</a>
                            </li>
                        </ul>
                    </div>
                    <div class="theUIs col-12 col-md-2">
                        <p>Jobs</p>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">All Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Company jobs </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Category Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Location jons</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Designation Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Skill Jobs</a>
                            </li>

                        </ul>
                    </div>
                    <div class="d-flex flex-column col-12 col-md-3">
                        <div class="theUIs">
                            <p>Browse jobs</p>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Companies</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Browse Jobs </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div class="theUIs">
                            <p>Information</p>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Terms& conditions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Privacy Policy </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Fraud Alert</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <hr class="col-12 " />
                    <div class="col-1"></div>
                    <div class=" container  ">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-12 col-md-3">
                                <p style={{fontSize: "small;"}}>All rights reserved @ 2022 PAB.Jobs</p>
                            </div>
                            <div class="col-12 col-md-4">
                                <p>Designed by <span>@ Perfex Technologies</span></p>
                            </div>
                            <div class="col-12 col-md-3">
                                <i class="fa-brands fa-youtube" style={{ padding: " 1px;" }}></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>





    )
}
export default Footer;