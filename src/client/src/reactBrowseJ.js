import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./headder";
import Footer from "./footer";
import { BrowserRouter, useLocation } from 'react-router-dom';


function BrowseJObs(props) {




    const [blogslist, setblogslist] = useState([]);
    const [blogslistFData, setblogslistFData] = useState([]);
    const [BrowseJObsBlog, setBrowseJObsBlog] = useState();
    const [userSkill, setuserSkill] = useState([]);

    const [userCity, setuserCity] = useState([]);
    const [userEXP, setuserEXP] = useState([]);
    const [userLoc, setUserLoc] = useState([]);
    const [userSAL, setuserSAL] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);


    const { state } = useLocation();
    console.log("patrams 123", state);



    useEffect(() => {
        fetchblogs()
    }, [])



    const fetchblogs = async () => {
        const api = "https://pab-server-testing.onrender.com/api/jobs";
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRjYjIyNmI0Zjc5NDE0MTJlMGQ1M2EiLCJpYXQiOjE2OTI3ODA3OTJ9.kAJiRLS9mfKamYtsGVuKvtQ06oZaKMjkVIVYBoHk41E'; // Replace with your actual authorization token
        try {
            const response = await axios.get(api, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
            });
            setblogslist(response.data);
            setblogslistFData(response.data);
            if (response.data.length > 0) {
                setBrowseJObsBlog(response.data[0])
            }

            if (state?.location) {
                handlefilter(state?.location, response.data)

            }
        } catch (error) {
            console.error("error fetching blogs11:", error);
        }

    };




    const searchBySkills = () => {
        const filteredJobs = blogslist.filter(blog =>
            blog?.skillsets && blog?.skillsets.some(eachSkill =>
                eachSkill?.toLowerCase().includes(userSkill?.toLowerCase().trim())) &&
            blog?.cities && blog?.cities.some(eachcity =>
                eachcity?.toLowerCase().includes(userCity?.toLowerCase().trim()))
        );
        setblogslistFData(filteredJobs);
    };


    const validateExperience = (e) => {
        if (e.target.checked) {
            setuserEXP([...userEXP, e.target.value])
        }
        else {
            setuserEXP(
                userEXP.filter((exp) => exp !== e.target.value)
            )
        }

    }
    const filterjobexp = () => {
        if (userEXP.length === 0) {
            setblogslistFData(blogslist);
            setBrowseJObsBlog(blogslist[0])

        }
        else {
            const filteredJobs = blogslist.filter((blog) =>
                userEXP.includes(blog.experience)
            );
            setblogslistFData(filteredJobs);
            setBrowseJObsBlog(filteredJobs[0]);
        }
    }


    const validateLocation = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.cities.includes(e));
        setblogslistFData(filteredJobs);
        setBrowseJObsBlog(filteredJobs[0])
        // setuserSAL(filteredJobs);
    }
    console.log(userLoc);

    const validateSAL = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.salary.includes(e));
        setblogslistFData(filteredJobs);
        setBrowseJObsBlog(filteredJobs[0])
        // setuserSAL(filteredJobs);
    }

    const validateSkills = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.skillsets.includes(e));
        setblogslistFData(filteredJobs);
        setUserLoc(filteredJobs);
        setBrowseJObsBlog(filteredJobs[0])
    }
    const validateEDU = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.education.includes(e));
        setblogslistFData(filteredJobs);
        setUserLoc(filteredJobs);
        setBrowseJObsBlog(filteredJobs[0])
    }




    const onclickblogdetails = (blogid) => {
        const selectedJobDetails = blogslist.find((each) => each._id === blogid)
        console.log(selectedJobDetails)
        setBrowseJObsBlog(selectedJobDetails)




    }



    const handlefilter = (company, alljobs1 = blogslist) => {
        company = Array.isArray(company) ? company : [company];
        const filteredJobs = alljobs1.filter((job) => {
            return company.includes(job.title);
        });
        setblogslistFData(filteredJobs);
        setBrowseJObsBlog(filteredJobs[0])

    };




    return (
        <div>
            <Header />
            <div className="container mt-1 ">
                <div className="row">

                    <div class="col-12  first  ">
                        <div class="col-md-5"></div>
                        <div class="row">
                            <div class="col-5 px-2"> </div>
                            <div class="col-2 px-5">
                                <p>Home <span>{">"}</span> Jobs</p>
                            </div>
                            <div class="col-4"> </div>
                        </div>
                        <div class="input-group mb-3 p-2">
                            <div className='col-3 '></div>

                            <div className="col-md-3 col-12 row  m-1"
                                style={{ backgroundColor: 'white', height: '40px', borderRadius: '10px' }}>
                                <div className='col-1' >
                                    <span class="px-1 mt-1"> <i class="fa-solid fa-location-dot "></i> </span></div>
                                <div className='col-8'>
                                    <span class=" "><input
                                        className="form-control dropdown-toggle"
                                        style={{ border: 'none', fontSize: 'small' }}
                                        type="search"
                                        value={userSkill}
                                        onChange={(e) => setuserSkill(e.target.value)}
                                        placeholder="Enter Skills"

                                    />

                                    </span>
                                </div>
                                <div className='col-1'>
                                    <span class="px-3"> <i class="fa-solid fa-caret-down"></i></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-12 row  m-1"
                                style={{ backgroundColor: 'white', height: '40px', borderRadius: '10px' }}>
                                <div className='col-1' >
                                    <span class="px-1 mt-1"> <i class="fa-solid fa-location-dot "></i> </span></div>
                                <div className='col-8'>
                                    <span class=" "><input
                                        className="form-control dropdown-toggle"
                                        style={{ border: 'none', fontSize: 'small' }}
                                        type="search"
                                        value={userCity}
                                        onChange={(e) => setuserCity(e.target.value)}
                                        placeholder="Enter location"

                                    />

                                    </span>
                                </div>
                                <div className='col-1'>
                                    <span class="px-3"> <i class="fa-solid fa-caret-down"></i></span>
                                </div>
                            </div>



                            <div class="col-12  row m-3">
                                <div class="col-5"> </div>
                                <div class="col-5 w-50 ">
                                    <button style={{ backgroundColor: '#270d44', borderRadius: '5px', color: '#ffff', marginLeft: '50px' }} onClick={searchBySkills}>Search</button>
                                </div>
                                <div class="col-4"> </div>
                            </div>
                        </div>
                    </div>


                    {/* kjhfjfn */}
                    <section class="container mt-3">
                        <div class="row">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-8">
                                <div class="d-flex flex-row row">
                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle  btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}
                                            >
                                                Experience
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <input
                                                        type='checkbox'
                                                        value='0-2 years'
                                                        onChange={validateExperience}
                                                    /> 0-2 years

                                                </li>
                                                <li>
                                                    <input
                                                        type='checkbox'
                                                        value='2-5 years'
                                                        onChange={validateExperience}
                                                    />


                                                    2-5 years

                                                </li>
                                                <li>
                                                    <input
                                                        type='checkbox'
                                                        value="5-10 years"
                                                        onChange={validateExperience}
                                                    />
                                                    5-10 years
                                                </li>



                                                <button onClick={filterjobexp}>Click</button>

                                            </ul>
                                        </div>
                                    </li>

                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}
                                            >
                                                Location
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateLocation("Hyderabad") }}>Hyderabad
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateLocation("Bangalore Rural") }} >Banglore
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateLocation("Aurangabad") }}>Aurangabad
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateLocation("Agra") }}>Agra
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateLocation("Visakhapatnam") }}>Visakhapatnam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateLocation("Ajitgarh (Mohali)") }}>Ajitgarh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}                                            >
                                                Salary
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateSAL("0-3 LPA") }}>0-3 LPA                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateSAL("3-5 LPA") }}>3-5 LPA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"

                                                        onClick={() => { validateSAL("5-7 LPA") }}>5-7 LPA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        onClick={() => { validateSAL("10-15 LPA") }}>10-15 LPA
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}                                            >
                                                Industry
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Manufacturing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Construction
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        IT
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Transport
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Food industry
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}
                                            >
                                                Destignation
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Chief Customer Officer
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Chief Financial Officer
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Chief Information Officer
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Chief Human Resources Officer
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Chief Product Officer
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}
                                            >
                                                Education
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="#" onClick={() => { validateEDU("B.Tech") }} >B.Tech
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" onClick={() => { validateEDU("Degree") }}>Degree
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li class="col-md-3 col-lg nav-item">
                                        <div>
                                            <button
                                                class="dropdown-toggle btn"
                                                data-bs-toggle="dropdown"
                                                id="browseItem"
                                                style={{ border: '1px solid blue', backgroundColor: '#f8f2f8', color: 'blue' }}                                            >
                                                Skills
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Core Java
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Dot Net
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Python
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Testing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        AWS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Advance Java
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        Frames
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </div>
                                <p style={{ fontSize: 'small', color: ' gray', marginTop: '20px' }}>Showing {blogslistFData.length} results for 'Graphic Designing'</p>
                            </div>
                        </div>

                    </section>



                    {/* oijfihsoufh */}

                    {/* <div class=" col-md-2"> </div> */}
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className="col-12 col-md-3 " style={{ fontSize: 'small', border: 'none' }}>
                            {blogslistFData.length > 0 && blogslistFData.map((blog) => (
                                <div key={blog._id} blog={blog} className={` card mt-3 select ${BrowseJObsBlog && BrowseJObsBlog.id === blog._id ? "selected" : ''}`}
                                    onClick={(e) => onclickblogdetails(blog._id)}
                                >

                                    <div className='row' style={{ fontWeight: 'bold' }}>
                                        <div className='col-8'>
                                            <h4 style={{ fontSize: 'small' }}>{blog.title}</h4>
                                        </div>

                                        <div className='col-4'>


                                            <span>{blog.salary}</span>


                                        </div>
                                    </div>

                                    <div className=''>
                                        <span>{blog.jobType}</span>
                                        <p>{blog.cities}</p>
                                        <p>{blog.experience}</p>
                                        <p>{blog.skillsets + ", "}</p>


                                    </div>
                                    <p style={{ textAlign: 'end', fontSize: 'x-small' }}>published One Day Ago</p>
                                </div>
                            ))}
                            {blogslistFData.length == 0 && (
                                <p>No Cards Available</p>
                            )

                            }
                        </div>
                        <div className='col-md-6 mt-3 card  secondCard' style={{border:"1px solid black"}} >
                            {BrowseJObsBlog &&
                                <div className='card mt-3 mb-2'>
                                    <div className='row'>
                                        <div className='col-5 m-4 d-flex flex-row' style={{ borderRight: '2px solid #f8f2f8' }} >

                                            <div>
                                                <h5>{BrowseJObsBlog.title}</h5>
                                                <p>{BrowseJObsBlog.recruiter.companyname}</p>
                                                <p style={{ fontSize: 'small' }} >Show more jobs in this company</p>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className=''>
                                <span style={{ borderRight: '1px solid black',margin:'10px' ,height:'250px'}}></span>
                             </div> */}
                                        <div className='col-5' style={{ margin: '10px' }}>
                                            <p>{BrowseJObsBlog.salary}</p>
                                            <p>{BrowseJObsBlog.cities}</p>
                                            <p>{BrowseJObsBlog.experience}</p>

                                        </div>
                                    </div>
                                    <hr></hr>

                                    <div className='row'>
                                        <div className='col-5 m-2'>
                                            <p>Posted Few Hours Ago</p>
                                            <p>Max position:{BrowseJObsBlog.maxPositions}</p>
                                            <p>Number Of Applicants:{BrowseJObsBlog.activeApplications}</p>
                                        </div>
                                        <div className='col-5 mt-2'>
                                            <button className='btn form-control' style={{ backgroundColor: '#270d44', color: 'white' }}>Apply Now</button>
                                        </div>
                                    </div>
                                    <div class="card p-2 m-2">
                                        <h5 style={{ color: "#270d44", fontSize: " small" }}> Job Desciption</h5>
                                        <h6 class="" style={{ color: "#270d44", fontSize: " small" }}> Roles and Responsibilites</h6>
                                        <p style={{ color: "#270d44", fontSize: " small" }}>
                                            Planning concepts by studying relevent information and materials <br></br> Illustrating concepts by
                                            designing examples of an assignmrnt size,type size and style and <br></br> submitting them for
                                            approval<br></br>
                                            Creting a wide range of graphics and layouts for products ,company logos <br></br> socal media
                                            banners, artwork and websits with software such as photologo.<br></br>
                                            Creating new graphics for socal media ,Email mailing Broadcasts lables & stickers for <br></br>
                                            products. Catogery ,etc .using adobe tools like photo shop ,illustarrtion and design <br></br>
                                            constructing with network, web design ,markting ,paintings and configure as necessary .<br></br>
                                            products. Catogery ,etc .using adobe tools like photo shop ,illustarrtion and design<br></br>
                                            rewiving the layouts and suggesitions and suggesting imporvements wirh necessary.
                                        </p>
                                        <h5 style={{ color: "#270d44", fontSize: " small" }}> Skills and Responsibilites:</h5>
                                        <p style={{ color: "#270d44", fontSize: " small" }}>
                                            Experience as a graphic designer or in a reational field.<br></br> Demostriate graphic skills witha
                                            strong portfolio.<br />
                                            Proficiency with require desktop publishing tools ,including Photoshop is desingn and <br></br>
                                            lillustrate <br></br>
                                            A strong eye for visual compsition . <br></br> Effective time management skills and ability to meet
                                            deadlines,<br></br>
                                            Able to give and recive construction crision<br></br> iciency with require desktop publishing tools
                                            ,including Photoshop is desingn
                                        </p>

                                    </div>


                                </div>


                            }
                        </div>
                    </div>

                </div>
            </div >
            <Footer />
        </div>


    )
}
export default BrowseJObs;