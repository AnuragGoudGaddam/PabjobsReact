import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const ResumeProfile = () => {

    const [resumeheadline, setresumeHeadline] = useState('');
    const [data, setdata] = useState([]);
    const usersData = {

        resumeheadline: resumeheadline,

    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check if the selected file is a PDF and its size is less than 5MB
            if (file.type === "application/pdf" && file.size <= 5 * 1024 * 1024) {
                setSelectedFile(file);
            } else {
                toast.error("Please select a PDF file less than 5MB.");
            }
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("resume", selectedFile);

            // You can use axios to upload the file to your server
            // Replace the URL with your server endpoint
            axios
                .post("YOUR_SERVER_UPLOAD_ENDPOINT", formData)
                .then((response) => {
                    // Handle the server response here
                    toast.success("Resume uploaded successfully.");
                })
                .catch((error) => {
                    // Handle any errors here
                    console.error("Error uploading resume:", error);
                    toast.error("Error uploading resume. Please try again later.");
                });
        } else {
            toast.warning("Please select a PDF file to upload.");
        }
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (
            resumeheadline !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/headline", usersData, { headers })
                .then((response) => {
                    setdata(response.data);
                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token)
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

                        }, 3000)
                    }
                })
        }
        else {
            toast.warning("Enter the Required Details");
        }
    }

    const [profileSummery, setprofileSummery] = useState('');
    const [data1, setdata1] = useState([]);
    const usersData11 = {

        profileSummery: profileSummery,

    }

    const onSubmitForm1 = (e) => {
        e.preventDefault();

        if (
            profileSummery !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/summery", usersData11, { headers })
                .then((response) => {
                    setdata(response.data);
                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token)
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

                        }, 3000)
                    }
                })
        }
        else {
            toast.warning("Enter the Required Details");
        }
    }
    // "keySkill submitForm"


    const [keyskill, setkeyskill] = useState('');
    const [data2, setdata2] = useState([]);
    const usersDatak = {

        profileSummery: profileSummery,

    }

    const onSubmitFormk = (e) => {
        e.preventDefault();

        if (
            keyskill !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/summery", usersDatak, { headers })
                .then((response) => {
                    setdata(response.data);
                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token)
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

                        }, 3000)
                    }
                })
        }
        else {
            toast.warning("Enter the Required Details");
        }
    }

    // "UI And UX submitform"


    const [uitotalEXp, setuitotalEXp] = useState('');
    const [uifromdate, setuifromdate] = useState('');
    const [describeJob, setdescribeJob] = useState('');
    const [currentCTC, setcurrentCTC] = useState('');
    const [uitilldate, setuitilldate] = useState('');


    const [data3, setdata3] = useState([]);
    const usersDataUI = {

        uitotalEXp: uitotalEXp,
        uifromdate: uifromdate,
        describeJob: describeJob,
        currentCTC: currentCTC,
        uitilldate: uitilldate
    }

    const onSubmitFormui = (e) => {
        e.preventDefault();

        if (
            uitotalEXp,
            uifromdate,
            describeJob,
            currentCTC,
            uitilldate !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/uiandux", usersDataUI, { headers })
                .then((response) => {
                    setdata(response.data);
                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token)
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

                        }, 3000)
                    }
                })
        }
        else {
            toast.warning("Enter the Required Details");
        }
    }

    const [degree, setdegree] = useState('');
    const [university, setuniversity] = useState('');
    const [educationyear, seteducationyear] = useState([]);
    const [data4,setdata4]=useState([]);


    const usersDataedu = {
        degree:degree,
        university:university,
        educationyear:educationyear,
    }

    const onSubmitFormedu = (e) => {
        e.preventDefault();

        if (
          degree,university,educationyear !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/summery", usersDatak, { headers })
                .then((response) => {
                    setdata(response.data);
                    console.log(response.data)
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token)
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

                        }, 3000)
                    }
                })
        }
        else {
            toast.warning("Enter the Required Details");
        }
    }




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
                    <div className="col-md-6 mt-1">
                        <div className="p-4 shadow card">
                            <p><span style={{ fontWeight: "bold" }}>Resume  </span>(Recruiters generally do not look at profile without resumes.)</p>
                            <label htmlFor="fileInput" className="btn btn-primary">
                                Upload Resume <i className="fa-solid fa-upload"></i>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                accept=".pdf"
                                style={{ display: "none" }} // Hide the input element
                                onChange={handleFileChange}
                            />
                            <button onClick={handleUpload}>Upload Resume</button>
                        </div>

                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p>Supported Formats: PDF up to 5MB</p>
                            </div>
                        </div>






                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
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
                                    <div class="d-flex flex-row">
                                        <h5>Resume Headline</h5>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal1123">
                                                    edit_square
                                                </span>
                                            </button>

                                            <div class="modal" id="myModal1123">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label className="heading211">
                                                                    Resume Heading
                                                                </label>
                                                                <br />
                                                                <p>
                                                                    Software Developer currently living in  Hyderabad
                                                                </p>
                                                                <textarea
                                                                    name=""
                                                                    id=""
                                                                    cols="30"
                                                                    rows="2"
                                                                    placeholder="Describe here"
                                                                    onChange={(e) => setresumeHeadline(e.target.value)}
                                                                    value={resumeheadline}
                                                                // onChange={(e) =>
                                                                // //   setresumeheading(e.target.value)
                                                                // }
                                                                // value={resumeheading}
                                                                ></textarea>

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitForm(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>Software Developer currently living in Hyderabad</p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-3 p-4 card shadow">
                            <div className="">
                                <div className=" " id="">
                                    <div className=" d-flex flex-row">

                                        <div className=" ">
                                            <h4>Profile Summary</h4>

                                        </div>
                                        <div className="" style={{ marginLeft: 'auto' }}>
                                            {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal11232">
                                                    edit_square
                                                </span>
                                            </button>

                                            <div class="modal" id="myModal11232">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">  Profile Summary </h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label className="heading211">
                                                                    Profile Summary
                                                                </label>
                                                                <br />

                                                                <textarea
                                                                    name=""
                                                                    id=""
                                                                    cols="30"
                                                                    rows="2"
                                                                    placeholder="Describe here"
                                                                    onChange={(e) =>
                                                                        setprofileSummery(e.target.value)
                                                                    }
                                                                    value={profileSummery}
                                                                ></textarea>

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <hr></hr>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Graphic Design Specialist with 3+ years of experience in the management of the <br></br> compelete  design
                                                process, from conceptulization to the delivery ,skilled with <br></br> Adobe  creative suite (Photoshop,Illustrator , lightroom,AfterEffects,)
                                                <br></br> Able to stretch the boundries of digital story telling to support <br></br> brands standouts
                                                .
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>
                        {/* key Skills */}

                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <h5>Key Skills</h5>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal112">
                                                    edit_square
                                                </span>
                                            </button>

                                            <div class="modal" id="myModal112">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Key Skills</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <div className="row ">
                                                                    <button className="col-3 btn onebutton shadow" >Photoshop</button>
                                                                    <button className="col-3 btn onebutton shadow">AfterEffects</button>
                                                                    <button className="col-3  btn onebutton shadow">Editing</button>
                                                                    <button className="col-3 btn onebutton shadow">Adobe XD</button>
                                                                    <button className="col-3 btn onebutton shadow">Animation</button>




                                                                </div>
                                                                <label className="heading211">
                                                                    Key Skills
                                                                </label>
                                                                <br />

                                                                <textarea
                                                                    name=""
                                                                    id=""
                                                                    cols="30"
                                                                    rows="2"
                                                                    placeholder="Describe here"
                                                                    onChange={(e) =>
                                                                        setkeyskill(e.target.value)
                                                                    }
                                                                    value={keyskill}
                                                                ></textarea>

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormk(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Photoshop</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">AfterEffects</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Editing</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Adobe XD</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Animation</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Prime Pro</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Blender </button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Illistator</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Canva</button>
                                        </div>
                                        <div className="col-lg">
                                            <button className="form-control buttonsinResume">Figma</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Employment */}
                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <h5>Employment (Enter your current and previous Employment details)</h5>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-7 " style={{ borderRight: '4px solid #f8f2f8', fontSize: 'small' }}>
                                            <h5>UI & UX Designer</h5>
                                            <p>Perfex Technologies</p>
                                            <p>Full-time | May 2022 to present (1 Year 3 Months)</p>
                                            <p>1 Month notice Period</p>
                                        </div>

                                        <div className=" col-md-4 mt-4">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                                    <button className="model1">
                                                        {" "}
                                                        <span class="material-symbols-outlined"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#myModalmm11123">
                                                            edit_square
                                                        </span>
                                                    </button>

                                                    <div class="modal" id="myModalmm11123">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                {/* <!-- Modal Header --> */}
                                                                <div class="modal-header">
                                                                    <h4 class="modal-title">UI & UX </h4>
                                                                    <button
                                                                        type="button"
                                                                        class="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                    ></button>
                                                                </div>

                                                                {/* <!-- Modal body --> */}
                                                                <div class="modal-body ">
                                                                    <div>
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <label>Total Experience </label><br></br>
                                                                                <input type="text " onChange={(e) =>
                                                                                    setuitotalEXp(e.target.value)
                                                                                }
                                                                                    value={uitotalEXp} placeholder="Years" /> <br></br>
                                                                                <br></br>
                                                                                <label>Your Designation</label> <br></br>
                                                                                <select>
                                                                                    <option >Finance</option>
                                                                                </select><br></br>
                                                                                <p>Is this your company ?</p>
                                                                                <div className="d-flex flex-row">
                                                                                    <div className="m-2">  <input type="radio" className="" /> No </div>
                                                                                    <div className="m-2">  <input type="radio" /> yes </div>
                                                                                </div>

                                                                                <label className="mt-1">Started Working From</label><br></br>
                                                                                <input type="date" onChange={(e)=> setuifromdate(e.target.value)}  value={uifromdate} />
                                                                                <br>
                                                                                </br>
                                                                                <br></br>

                                                                                <label> Deacribe Your Job</label> <br></br>
                                                                                <textarea
                                                                                    role=""
                                                                                    rows={4}
                                                                                    cols={20}
                                                                                    onChange={(e)=>  setdescribeJob(e.target.value)} value={describeJob}
                                                                                >
                                                                                </textarea>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label>Current CTC </label><br></br>
                                                                                <input type="text " placeholder="Current CTC" onChange={(e)=> setcurrentCTC(e.target.value)}  value={currentCTC}/> <br></br>
                                                                                <br></br>
                                                                                <label>Your Organization Category</label> <br></br>
                                                                                <select>
                                                                                    <option >Carporations</option>
                                                                                </select><br></br>
                                                                                <br>
                                                                                </br>
                                                                                <br></br>
                                                                                <label className="mt-4"> Worked Till now</label><br></br>
                                                                                <input type="date" onChange={(e) =>setuitilldate(e.target.value)} value={uitilldate} />

                                                                            </div>

                                                                        </div>

                                                                        <div class="modal-footer">
                                                                            <button
                                                                                type="submit"
                                                                                class="btn btn-danger"
                                                                                data-bs-dismiss="modal"
                                                                              onClick={(e) => onSubmitFormui(e)}
                                                                            >
                                                                                Save
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <h6>+ Add Employment</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>



                        {/* Education */}
                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <h5>Eduction (Enter your qualification details)</h5>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-7 " style={{ borderRight: '4px solid #f8f2f8', fontSize: 'small' }}>
                                            <span>Add class X <span style={{ color: '#f8f2f8', fontSize: 'x-large', fontWeight: 'bold' }}>|</span> Add class XII <span style={{ color: '#f8f2f8', fontSize: 'x-large', fontWeight: 'bold' }}>|</span>  Add graduaton /diploma </span>
                                            <p>Add masters/post-graduation  <span style={{ color: '#f8f2f8', fontSize: 'x-large', fontWeight: 'bold' }}>|</span> Add doctorate/PhD </p>

                                        </div>

                                        <div className=" col-md-4 mt-4">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                                    <button className="model1">
                                                        {" "}
                                                        <span class="material-symbols-outlined"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#myModalmm11">
                                                            edit_square
                                                        </span>
                                                    </button>

                                                    <div class="modal" id="myModalmm11">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                {/* <!-- Modal Header --> */}
                                                                <div class="modal-header">
                                                                    <h4 class="modal-title">Resume Headline</h4>
                                                                    <button
                                                                        type="button"
                                                                        class="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                    ></button>
                                                                </div>

                                                                {/* <!-- Modal body --> */}
                                                                <div class="modal-body ">
                                                                    <div>
                                                                        {/* <label className="heading211 mt-3">
                                                                            Resume Heading   :
                                                                        </label>
                                                                      
                                                                        <textarea
                                                                        
                                                                            name=""
                                                                            id=""
                                                                            cols="20"
                                                                            rows="1"
                                                                            placeholder="Describe here"
                                                                        // onChange={(e) =>
                                                                        // //   setresumeheading(e.target.value)
                                                                        // }
                                                                        // value={resumeheading}
                                                                        ></textarea> */}

                                                                        {/* <!-- Modal footer --> */}

                                                                        <label>Degree : </label>
                                                                        <input type="text" onChange={(e)=> setdegree(e.target.value) } value={degree} /> <br></br>
                                                                        <br></br>

                                                                        <label>Univesity :</label>
                                                                        <input type="text"  onChange={(e)=> setuniversity(e.target.value) } value={university} /> <br></br>
                                                                        <br></br>
                                                                        <label>Year :</label>
                                                                        <input type="text"  onChange={(e)=> seteducationyear(e.target.value) } value={educationyear} /> <br></br>
                                                                        <div class="modal-footer">
                                                                            <button
                                                                                type="submit"
                                                                                class="btn btn-danger"
                                                                                data-bs-dismiss="modal"
                                                                              onClick={(e) => onSubmitFormedu(e)}
                                                                            >
                                                                                Save
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <h6>+ Add Employment</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* projects */}
                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <h5>Projects</h5>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-7 " style={{ borderRight: '4px solid #f8f2f8' }}>
                                            <p>(Add details about Projects you have done) </p>
                                        </div>

                                        <div className=" col-md-4 ">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                                    <button className="model1">
                                                        {" "}
                                                        <span class="material-symbols-outlined"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#myModalb1">
                                                            edit_square
                                                        </span>


                                                    </button>

                                                    <div class="modal" id="myModalb1">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                {/* <!-- Modal Header --> */}
                                                                <div class="modal-header">
                                                                    <h4 class="modal-title">Projects</h4>
                                                                    <button
                                                                        type="button"
                                                                        class="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                    ></button>
                                                                </div>

                                                                {/* <!-- Modal body --> */}
                                                                <div class="modal-body ">
                                                                    <div>
                                                                        {/* <label className="heading211">
                                                                            Resume Heading
                                                                        </label>
                                                                        <br />
                                                                        <p>
                                                                            Software Developer currently living in Hyderabad
                                                                        </p>
                                                                        <textarea
                                                                            name=""
                                                                            id=""
                                                                            cols="30"
                                                                            rows="2"
                                                                            placeholder="Describe here"
                                                                        // onChange={(e) =>
                                                                        // //   setresumeheading(e.target.value)
                                                                        // }
                                                                        // value={resumeheading}
                                                                        ></textarea> */}


                                                                        <label>Title : </label>
                                                                        <input type="text" /> <br></br>
                                                                        <br></br>

                                                                        <label>Description :</label>
                                                                        <input type="text" /> <br></br>
                                                                        <br></br>
                                                                        <label>Github link :</label>
                                                                        <input type="text" /> <br></br>

                                                                        {/* <!-- Modal footer --> */}
                                                                        <div class="modal-footer">
                                                                            <button
                                                                                type="submit"
                                                                                class="btn btn-danger"
                                                                                data-bs-dismiss="modal"
                                                                            //   onClick={(e) => onSubmitForm1(e)}
                                                                            >
                                                                                Save
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 ">
                                                    <h6>  + Add Employment</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* All */}
                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <h5>Accomplishment</h5>
                                <hr></hr>
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <div className="row">
                                            <div className="col-12"> <h5>Work sample</h5> </div>
                                            <div>  <p>Add link to your Projects (e.g. Github Links etc.) </p> </div>
                                        </div>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}

                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModalm1">
                                                    edit_square
                                                </span>

                                            </button>

                                            <div class="modal" id="myModalm1">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label className="heading211">
                                                                    Work Sample
                                                                </label> <br></br>
                                                                <input type="text" />


                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <div>
                                            <h5 className="col-12">White paper / Reaearch publication</h5>
                                            <p>Add link to your Ponline publications. </p>
                                        </div>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModalm2">
                                                    edit_square
                                                </span>

                                            </button>

                                            <div class="modal" id="myModalm2">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label>Title :</label>
                                                                <input type="text" /><br></br>
                                                                <br></br>
                                                                <label>Author :</label>
                                                                <input type="text" /><br></br>
                                                                <br></br>
                                                                <label>publication Date :</label>
                                                                <input type="date" /><br></br>


                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <div className="row" >
                                            <h5 className="col-12" >Presentation</h5>
                                            <p>Add link to your online Presentation </p>
                                        </div>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModalm3">
                                                    edit_square
                                                </span>

                                            </button>

                                            <div class="modal" id="myModalm3">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label>Title :</label>
                                                                <input type="text" /><br></br>
                                                                <br></br>
                                                                <label>Speaker :</label>
                                                                <input type="text" /><br></br>
                                                                <br></br>
                                                                <label> Date :</label>
                                                                <input type="date" /><br></br>

                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <div className="row">
                                            <h5 className="col-12">Patent</h5>
                                            <p>Add details of Patent you have filed</p>
                                        </div>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModalm4">
                                                    edit_square
                                                </span>

                                            </button>

                                            <div class="modal" id="myModalm4">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Patent</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label className="heading211">
                                                                    Patent
                                                                </label>
                                                                <br />
                                                                <input type="text" />

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <div className="row">
                                            <h5 className="col-12">Certification</h5>
                                            <p>Add details of Certification you have achieved/completed</p>
                                        </div>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModalm5">
                                                    edit_square
                                                </span>

                                            </button>

                                            <div class="modal" id="myModalm5">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <label>Name : </label>
                                                                <input type="text" /> <br></br>
                                                                <br></br>

                                                                <label>Organization :</label>
                                                                <input type="text" /> <br></br>
                                                                <br></br>
                                                                <label>Date :</label>
                                                                <input type="date" /> <br></br>

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>

                            </div>
                        </section>

                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <h5>Desired Career Profile</h5>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal11234">
                                                    edit_square
                                                </span>
                                            </button>

                                            <div class="modal" id="myModal11234">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <label>Desire Industry</label> <br></br>
                                                                        <input type="text" placeholder="Enter Desire Industry" />
                                                                        <br></br>
                                                                        <label>Designation</label> <br></br>
                                                                        <input type="text" placeholder="Enter Desigantion" />
                                                                        <br></br>
                                                                        <label>Desired to Shift</label> <br></br>
                                                                        <input type="text" placeholder="Enter Day/night" />
                                                                        <br></br>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label>Prefered Location</label> <br></br>
                                                                        <input type="text" placeholder="Enter Prefered location" />
                                                                        <br></br>
                                                                        <label>Expected CTC</label> <br></br>
                                                                        <input type="text" placeholder="Enter Expected CTC" />
                                                                        <br></br>
                                                                        <label>Employment type</label> <br></br>
                                                                        <input type="text" placeholder="Enter Employment type " />
                                                                        <br></br>
                                                                    </div>

                                                                </div>
                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6" style={{ borderRight: '4px solid #f8f2f8' }}>
                                            <div className="row">
                                                <h6>Desired Industry</h6>
                                                <p>IT Services & Consulting</p>

                                            </div>
                                            <div className="row">
                                                <h6>Designation</h6>
                                                <p>UI & UX Designer</p>

                                            </div>
                                            <div className="row">
                                                <h6>Desired Shift</h6>
                                                <p>Day/Night</p>

                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <h6>Prefered Location</h6>
                                                <p>Hyderabad</p>

                                            </div>
                                            <div className="row">
                                                <h6>Expected CTC</h6>
                                                <p>5,00,000 - 7,00,000</p>

                                            </div>
                                            <div className="row">
                                                <h6>Employment Type</h6>
                                                <p>Full Time</p>

                                            </div>


                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>

                        <section id="headline">
                            <div class="card p-4 mt-3 shadow">
                                <div id="ResumeHeadline">
                                    <div class="d-flex flex-row">
                                        <h5>Personal Details</h5>
                                        <div style={{ marginLeft: "auto" }}>
                                            {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                                            <button className="model1">
                                                {" "}
                                                <span class="material-symbols-outlined"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal112345">
                                                    edit_square
                                                </span>
                                            </button>

                                            <div class="modal" id="myModal112345">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        {/* <!-- Modal Header --> */}
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Resume Headline</h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                            ></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div class="modal-body ">
                                                            <div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <label>Date Of Birth</label> <br></br>
                                                                        <input type="text" placeholder="Enter Date of Birth" />
                                                                        <br></br>
                                                                        <label>Age</label> <br></br>
                                                                        <input type="text" placeholder="Enter Age" />
                                                                        <br></br>
                                                                        <label>Gender</label> <br></br>
                                                                        <input type="text" placeholder="Enter Gender" />
                                                                        <br></br>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label>Marital Status</label> <br></br>
                                                                        <input type="text" placeholder="Enter Marital Status" />
                                                                        <br></br>
                                                                        <label>Languages </label> <br></br>
                                                                        <input type="text" placeholder="Enter Languages" />
                                                                        <br></br>
                                                                        <label>Employment type</label> <br></br>
                                                                        <textarea cols={25}
                                                                            rows={3}
                                                                        ></textarea>
                                                                        <br></br>
                                                                    </div>

                                                                </div>

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                    //   onClick={(e) => onSubmitForm1(e)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6" style={{ borderRight: '4px solid #f8f2f8' }}>
                                            <div className="row">
                                                <h6>Date Of Birth</h6>
                                                <p>01 December 1969</p>

                                            </div>
                                            <div className="row">
                                                <h6>Age</h6>
                                                <p>--</p>

                                            </div>
                                            <div className="row">
                                                <h6>Gender</h6>
                                                <p>Male</p>

                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <h6>Marital Status</h6>
                                                <p>Single</p>

                                            </div>
                                            <div className="row">
                                                <h6> Languages</h6>
                                                <p>Telugu,Hindi,English</p>

                                            </div>
                                            <div className="row">
                                                <h6> Addrress</h6>
                                                <p>201,Plot 82, Laxmi nagar,Filimnagar</p>
                                                <p>Hyderabad,Telangana-500008</p>

                                            </div>


                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default ResumeProfile;