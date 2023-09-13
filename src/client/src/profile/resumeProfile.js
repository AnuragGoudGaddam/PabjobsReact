import React from "react";
const ResumeProfile = () => {
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 mt-1">
                        <div className="card px-2">
                            <div className="row ">
                                <div className="col-3">
                                    <i class="fa-solid fa-circle-user" style={{ fontSize: '80px' }}></i>
                                </div>
                                <div className="col-6">
                                    <p style={{ fontWeight: 'bold' }}>Anurag</p>
                                    <p>UI & UX Designer</p>
                                    <p style={{ fontSize: "small" }} >at Perfex Technologies</p>
                                </div>

                            </div>
                            <p>9786465763</p>
                            <p>anurag7093@gmail.com</p>
                            <p>3 years</p>
                            <p>Hyderabad</p>
                            <p>5,00,000-7,00,000</p>
                            <p>1 Month notice Period</p>
                            <hr></hr>
                            <p>Your Profile Updated</p>
                            <div className="row">
                                <div className="col-md-3">
                                    <button className="btn button1" >82%</button>
                                </div>
                                <div className="col-md-7">
                                    <p>Add 69 missing details</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-8" style={{ fontSize: 'small' }}><p>Profile Last Updated-june5th 2023</p></div>
                            </div>
                        </div>
                        <div className="mt-1"> <button className="form-control">Resume</button></div>
                        <div className="mt-1"> <button className="form-control">Resume Headline</button></div>
                        <div className="mt-1"> <button className="form-control">Profile Summary</button></div>
                        <div className="mt-1"> <button className="form-control">Key Skills</button></div>
                        <div className="mt-1"> <button className="form-control">Employment</button></div>
                        <div className="mt-1"> <button className="form-control"> Eduction</button></div>
                        <div className="mt-1"> <button className="form-control"> Projects</button></div>
                        <div className="mt-1"> <button className="form-control"> Accomplishment</button></div>
                        <div className="mt-1"> <button className="form-control"> Desired Career </button></div>
                        <div className="mt-1"> <button className="form-control"> Desired Career </button></div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-12 card">
                            <p><span style={{ fontWeight: "bold" }}>Resume  </span>(Recruiters generally do not look at profile without resumes.)</p>
                            <div className="row resumeUpload">
                                <div className="col-md-4"></div>
                                <div className="col-md-3 m-4"><button>Upload Resume <i class="fa-solid fa-upload"></i></button></div>
                            </div>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 ">
                                    <p>Supported Formats doc,docx,pdf upto 2MB</p>
                                </div>

                            </div>
                        </div>
                        <div class="container mt-3">
                            <h3>Modal Example</h3>
                            <p>Click on the button to open the modal.</p>

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                Open modal
                            </button>
                        </div>


                        <div class="modal" id="myModal">
                            <div class="modal-dialog">
                                <div class="modal-content">


                                    <div class="modal-header">
                                        <h4 class="modal-title">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>


                                    <div class="modal-body">
                                        Modal body..
                                    </div>


                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResumeProfile;