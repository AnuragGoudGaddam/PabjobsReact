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

    // const handleUpload = () => {
    //     if (selectedFile) {
    //         const formData = new FormData();
    //         formData.append("resume", selectedFile);

    //         // You can use axios to upload the file to your server
    //         // Replace the URL with your server endpoint
    //         axios
    //             .post("YOUR_SERVER_UPLOAD_ENDPOINT", formData)
    //             .then((response) => {
    //                 // Handle the server response here
    //                 toast.success("Resume uploaded successfully.");
    //             })
    //             .catch((error) => {
    //                 // Handle any errors here
    //                 console.error("Error uploading resume:", error);
    //                 toast.error("Error uploading resume. Please try again later.");
    //             });
    //     } else {
    //         toast.warning("Please select a PDF file to upload.");
    //     }
    // };

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
                    setdata2(response.data);
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

    const [educationDegree, seteducationDegree] = useState('');
    const [university, setuniversity] = useState('');
    const [educationyear, seteducationyear] = useState('');
    const [data4, setdata4] = useState([]);


    const usersDataedu = {
        educationDegree: educationDegree,
        university: university,
        educationyear: educationyear,
    }

    const onSubmitFormedu = (e) => {
        e.preventDefault();

        if (
            educationDegree, university, educationyear !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/education", usersDataedu, { headers })
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



    const [projecttitle, setprojecttitle] = useState('');
    const [projectdescription, setprojectdescription] = useState('');
    const [projectgithublink, setprojectgithublink] = useState('');
    const [data5, setdata5] = useState([]);


    const usersDataproject = {
        projecttitle: projecttitle,
        projectdescription: projectdescription,
        projectgithublink: projectgithublink,
    }

    const onSubmitFormeproject = (e) => {
        e.preventDefault();

        if (
            projecttitle, projectdescription, projectgithublink !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/education", usersDataproject, { headers })
                .then((response) => {
                    setdata5(response.data);
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

    // accomplishment

    const [worksample, setworksample] = useState('');
    const [data6, setdata6] = useState([]);
    const usersDatawork = {

        worksample: worksample,

    }

    const onSubmitFormwork = (e) => {
        e.preventDefault();

        if (
            worksample !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/worksample", usersDatawork, { headers })
                .then((response) => {
                    setdata2(response.data);
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

    const [papertitle, setpapertitle] = useState('');
    const [paperauthor, setpaperauthor] = useState('');
    const [paperpublicationdate, setpaperpublicationdate] = useState('');
    const [data7, setdata7] = useState([]);


    const usersDatawhitepaper = {
        papertitle: papertitle,
        paperauthor: paperauthor,
        paperpublicationdate: paperpublicationdate,
    }

    const onSubmitFormpaper = (e) => {
        e.preventDefault();

        if (
            papertitle, paperauthor, paperpublicationdate !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/paper", usersDatawhitepaper, { headers })
                .then((response) => {
                    setdata5(response.data);
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


    const [preaentationtitle, setpreaentationtitle] = useState('');

    const [presentationspeaker, setpresentationspeaker] = useState('');
    const [presentiondate, setpresentiondate] = useState('');
    const [data9, setdata9] = useState([]);


    const usersDatepresentation = {
        preaentationtitle: preaentationtitle,
        presentationspeaker: presentationspeaker,
        presentiondate: presentiondate,
    }

    const onSubmitFormpresentation = (e) => {
        e.preventDefault();

        if (
            preaentationtitle, presentationspeaker, presentiondate !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
             
                .post("http://localhost:3010/Presentation", usersDatepresentation, { headers })
                .then((response) => {
                      setdata9(response.data);
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


    const [accpatent, setaccpatent] = useState('');
    const [data10, setdata10] = useState([]);
    const usersDataaccpatent = {

        accpatent: accpatent,

    }

    const onSubmitFormaccpatent = (e) => {
        e.preventDefault();

        if (
            accpatent !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/patent", usersDataaccpatent, { headers })
                .then((response) => {
                    setdata10(response.data);
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

    // certification
    const [certificationname, setcertificationname] = useState('');

    const [certificationorganization, setcertificationorganization] = useState('');

    const [certificationdate, setcertificationdate] = useState('');

    const [data11, setdata11] = useState([]);


    const usersDatecertification = {
        certificationname: certificationname,
        certificationorganization: certificationorganization,
        certificationdate: certificationdate,
    }

    const onSubmitFormcertification = (e) => {
        e.preventDefault();

        if (
            certificationname, certificationorganization, certificationdate !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/certification", usersDatecertification, { headers })
                .then((response) => {
                    setdata9(response.data);
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


    //DesiredCareerProfile

    const [desireindustry, setdesireindustry] = useState('');

    const [desiredesignation, setdesiredesignation] = useState('');

    const [DesiredtoShift, setDesiredtoShift] = useState('');

    const [PreferedLocation, setPreferedLocation] = useState('');

    const [desireExpectedCTC, setdesireExpectedCTC] = useState('');

    const [desireEmploymenttype, setdesireEmploymenttype] = useState('');

    const [data12, setdata12] = useState([]);


    const DesiredCareerProfile = {
        desireindustry: desireindustry,
        desiredesignation: desiredesignation,
        DesiredtoShift: DesiredtoShift,
        PreferedLocation: PreferedLocation,
        desireExpectedCTC: desireExpectedCTC,
        desireEmploymenttype: desireEmploymenttype,

    }

    const onSubmitFormDesiredCareerProfile = (e) => {
        e.preventDefault();

        if (
            desireindustry,
            desiredesignation,
            DesiredtoShift,
            PreferedLocation,
            desireExpectedCTC,
            desireEmploymenttype !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/DesiredCareerProfile", DesiredCareerProfile, { headers })
                .then((response) => {
                    setdata9(response.data);
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


    const [DateOfBirth, setDateOfBirth] = useState('');

    const [Age, setAge] = useState('');

    const [Gender, setGender] = useState('');

    const [MaritalStatus, setMaritalStatus] = useState('');

    const [Languages, setLanguages] = useState('');

    const [personalEmploymenttype, setpersonalEmploymenttype] = useState('');

    const [data13, setdata13] = useState([]);


    const PersonalDetails = {
        DateOfBirth: DateOfBirth,
        Age: Age,
        Gender: Gender,
        MaritalStatus: MaritalStatus,
        Languages: Languages,
        personalEmploymenttype: personalEmploymenttype,

    }

    const onSubmitFormPersonalDetails = (e) => {
        e.preventDefault();

        if (
            DateOfBirth, Age, Gender, MaritalStatus, Languages, personalEmploymenttype !== ''
        ) {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRmOTZkYThkMzNmYjk2Y2FlOTcwZmM1IiwiaWF0IjoxNjk0Nzc4NzU5LCJleHAiOjYyOTQ3Nzg3NTl9.k1xMr8HbrE_B4H-l-btruArBFT5ohmrNSzTMbPaJUEc"
            }
            axios
                .post("http://localhost:3010/PersonalDetails", PersonalDetails, { headers })
                .then((response) => {
                    setdata13(response.data);
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

    const [file, setFile] = useState(null);

    const handleFileChange1 = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.size <= 2000000) { // Check if file size is less than 2 MB
        setFile(selectedFile);
      } else {
        alert("Please select a PDF file less than 2MB.");
      }
    };
  
    // const handleUpload = async () => {
    //   if (file) {
    //     const formData = new FormData();
    //     formData.append("pdf", file);
  
    //     try {
    //       const response = await fetch("/upload", {
    //         method: "POST",
    //         body: formData,
    //       });
  
    //       if (response.status === 200) {
    //         alert("PDF uploaded successfully.");
    //       } else {
    //         alert("Failed to upload PDF.");
    //       }
    //     } catch (error) {
    //       console.error("Error uploading PDF:", error);
    //     }
    //   } else {
    //     alert("Please select a PDF file first.");
    //   }
    // }

    const handleUpload = async () => {
        console.log("Upload button clicked");
      
        if (file) {
          console.log("File selected:", file);
      
          const formData = new FormData();
          formData.append("pdf", file);
      
          try {
            const response = await fetch("/upload", {
              method: "POST",
              
              body: formData,
            });
      
            console.log("Response status:", response.status);
      
            if (response.status === 200) {
              alert("PDF uploaded successfully.");
            } else {
              const data = await response.json();
              console.error("Error response:", data);
              alert(`Failed to upload PDF. Error: ${data.message}`);
            }
          } catch (error) {
            console.error("Error uploading PDF:", error);
            alert("Error uploading PDF. Please try again later.");
          }
        } else {
          alert("Please select a PDF file first.");
        }
      };
      

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
                        <a href="#uploadresume"><div className="mt-1"> <button className="form-control">Resume</button></div></a>
                       <a href="#ResumeHeadline">  <div className="mt-1"> <button className="form-control">Resume Headline</button></div></a>
                      <a href="">  <div className="mt-1"> <button className="form-control">Profile Summary</button></div></a>
                      <a href="#keyskill">  <div className="mt-1"> <button className="form-control">Key Skills</button></div></a>
                        <div className="mt-1"> <button className="form-control">Employment</button></div>
                        <div className="mt-1"> <button className="form-control"> Eduction</button></div>
                        <div className="mt-1"> <button className="form-control"> Projects</button></div>
                        <div className="mt-1"> <button className="form-control"> Accomplishment</button></div>
                        <div className="mt-1"> <button className="form-control"> Desired Career </button></div>
                      <a href="#Desiredprofile"> <div className="mt-1"> <button className="form-control"> Desired Career </button></div> </a> 
                    </div>
                    <div className="col-md-6 mt-1">
                     

                        <div className="  p-4 shadow card" id="uploadresume">
                            <p>
                                <span style={{ fontWeight: "bold" }}>Resume </span>
                                (Recruiters generally do not look at profiles without resumes.)
                            </p>
                            <input
                                type="file"
                                accept=".pdf"
                                style={{ display: "none" }}
                                onChange={handleFileChange1}
                                id="fileInput"
                            />
                            <label htmlFor="fileInput" className="btn btn-primary">
                                Upload Resume
                                <i className="fa-solid fa-upload"></i>
                            </label>
                            <button onClick={handleUpload}>Upload Resume</button>
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

                        <section id=""  className= " mt-3 p-4 card shadow">
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

                        <section id="keyskill">
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
                        <section id="Employment">
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
                                                                                <input type="date" onChange={(e) => setuifromdate(e.target.value)} value={uifromdate} />
                                                                                <br>
                                                                                </br>
                                                                                <br></br>

                                                                                <label> Deacribe Your Job</label> <br></br>
                                                                                <textarea
                                                                                    role=""
                                                                                    rows={4}
                                                                                    cols={20}
                                                                                    onChange={(e) => setdescribeJob(e.target.value)} value={describeJob}
                                                                                >
                                                                                </textarea>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label>Current CTC </label><br></br>
                                                                                <input type="text " placeholder="Current CTC" onChange={(e) => setcurrentCTC(e.target.value)} value={currentCTC} /> <br></br>
                                                                                <br></br>
                                                                                <label>Your Organization Category</label> <br></br>
                                                                                <select>
                                                                                    <option >Carporations</option>
                                                                                </select><br></br>
                                                                                <br>
                                                                                </br>
                                                                                <br></br>
                                                                                <label className="mt-4"> Worked Till now</label><br></br>
                                                                                <input type="date" onChange={(e) => setuitilldate(e.target.value)} value={uitilldate} />

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
                        <section id="Education">
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
                                                                        <input type="text" onChange={(e) => seteducationDegree(e.target.value)} value={educationDegree} /> <br></br>
                                                                        <br></br>

                                                                        <label>Univesity :</label>
                                                                        <input type="text" onChange={(e) => setuniversity(e.target.value)} value={university} /> <br></br>
                                                                        <br></br>
                                                                        <label>Year :</label>
                                                                        <input type="text" onChange={(e) => seteducationyear(e.target.value)} value={educationyear} /> <br></br>
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
                                                                        <input type="text" onChange={(e) => setprojecttitle(e.target.value)} value={projecttitle} /> <br></br>
                                                                        <br></br>

                                                                        <label>Description :</label>
                                                                        <input type="text" onChange={(e) => setprojectdescription(e.target.value)} value={projectdescription} /> <br></br>
                                                                        <br></br>
                                                                        <label>Github link :</label>
                                                                        <input type="text" onChange={(e) => setprojectgithublink(e.target.value)} value={projectgithublink} /> <br></br>

                                                                        {/* <!-- Modal footer --> */}
                                                                        <div class="modal-footer">
                                                                            <button
                                                                                type="submit"
                                                                                class="btn btn-danger"
                                                                                data-bs-dismiss="modal"
                                                                                onClick={(e) => onSubmitFormeproject(e)}
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
                                                                <input type="text" onChange={(e) => setworksample(e.target.value)} value={worksample} />


                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormwork(e)}
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
                                <div id="paper">
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
                                                            <h4 class="modal-title">White paper / Reaearch publication</h4>
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
                                                                <input type="text" onChange={(e) => setpapertitle(e.target.value)} value={papertitle} /><br></br>
                                                                <br></br>
                                                                <label>Author :</label>
                                                                <input type="text" onChange={(e) => setpaperauthor(e.target.value)} value={paperauthor} /><br></br>
                                                                <br></br>
                                                                <label>publication Date :</label>
                                                                <input type="date" onChange={(e) => setpaperpublicationdate(e.target.value)} value={paperpublicationdate} /><br></br>


                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormpaper(e)}
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
                                <div id="Presentation">
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
                                                                <input type="text" onChange={(e) => setpreaentationtitle(e.target.value)} value={preaentationtitle} /><br></br>
                                                                <br></br>
                                                                <label>Speaker :</label>
                                                                <input type="text" onChange={(e) => setpresentationspeaker(e.target.value)} value={presentationspeaker} /><br></br>
                                                                <br></br>
                                                                <label> Date :</label>
                                                                <input type="date" onChange={(e) => setpresentiondate(e.target.value)} value={presentiondate} /><br></br>

                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormpresentation(e)}
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
                                <div id="Patent">
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
                                                                <input type="text" onChange={(e) => setaccpatent(e.target.value)} value={accpatent} />

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormaccpatent(e)}
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
                                <div id="certification">
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
                                                                <input type="text" onChange={(e) => setcertificationname(e.target.value)} value={certificationname} /><br></br>
                                                                <br></br>

                                                                <label>Organization :</label>
                                                                <input type="text" onChange={(e) => setcertificationorganization(e.target.value)} value={certificationorganization} /><br></br>
                                                                <br></br>
                                                                <label>Date :</label>
                                                                <input type="date" onChange={(e) => setcertificationdate(e.target.value)} value={certificationdate} /> <br></br>

                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormcertification(e)}
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

                        {/* DesiredCareerProfile */}
                        <section id="Desiredprofile">
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
                                                                        <input type="text" placeholder="Enter Desire Industry" onChange={(e) => setdesireindustry(e.target.value)} value={desireindustry} />
                                                                        <br></br>
                                                                        <label>Designation</label> <br></br>
                                                                        <input type="text" placeholder="Enter Desigantion" onChange={(e) => setdesiredesignation(e.target.value)} value={desiredesignation} />
                                                                        <br></br>
                                                                        <label>Desired to Shift</label> <br></br>
                                                                        <input type="text" placeholder="Enter Day/night" onChange={(e) => setDesiredtoShift(e.target.value)} value={DesiredtoShift} />
                                                                        <br></br>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label>Prefered Location</label> <br></br>
                                                                        <input type="text" placeholder="Enter Prefered location" onChange={(e) => setPreferedLocation(e.target.value)} value={PreferedLocation} />
                                                                        <br></br>
                                                                        <label>Expected CTC</label> <br></br>
                                                                        <input type="text" placeholder="Enter Expected CTC" onChange={(e) => setdesireExpectedCTC(e.target.value)} value={desireExpectedCTC} />
                                                                        <br></br>
                                                                        <label>Employment type</label> <br></br>
                                                                        <input type="text" placeholder="Enter Employment type " onChange={(e) => setdesireEmploymenttype(e.target.value)} value={desireEmploymenttype} />
                                                                        <br></br>
                                                                    </div>

                                                                </div>
                                                                {/* <!-- Modal footer --> */}
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-danger"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={(e) => onSubmitFormDesiredCareerProfile(e)}
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

                        {/* PersonalDetails  */}
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
                                                                        <input type="text" placeholder="Enter Date of Birth" onChange={(e) => setDateOfBirth(e.target.value)} value={DateOfBirth} />
                                                                        <br></br>
                                                                        <label>Age</label> <br></br>
                                                                        <input type="text" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} value={Age} />
                                                                        <br></br>
                                                                        <label>Gender</label> <br></br>
                                                                        <input type="text" placeholder="Enter Gender" onChange={(e) => setGender(e.target.value)} value={Gender} />
                                                                        <br></br>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label>Marital Status</label> <br></br>
                                                                        <input type="text" placeholder="Enter Marital Status" onChange={(e) => setMaritalStatus(e.target.value)} value={MaritalStatus} />
                                                                        <br></br>
                                                                        <label>Languages </label> <br></br>
                                                                        <input type="text" placeholder="Enter Languages" onChange={(e) => setLanguages(e.target.value)} value={Languages} />
                                                                        <br></br>
                                                                        <label>Employment type</label> <br></br>
                                                                        <textarea cols={25}
                                                                            rows={3}
                                                                            onChange={(e) => setpersonalEmploymenttype(e.target.value)} value={personalEmploymenttype}
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
                                                                        onClick={(e) => onSubmitFormPersonalDetails(e)}
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