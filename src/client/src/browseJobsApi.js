import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./headder";
import Footer from "./footer";
import { Button } from 'react-bootstrap';






function BrowseJobs(props) {
    const [UserEnteredTextt, setUserEnteredText] = useState('');
    const [userList, setUserList] = useState(browsejobss);
    // const [skills1,setSkills1]=
    // const[location1,setLocation1]= useState('');
    const [filteredArray, setFilteredArray] = useState([])
    const [locationFilter, setLocationFilter] = useState('');

    const [skillsfilter, setSkillsfilter] = useState('');
    const [BrowseJObsBlog, setBrowseJObsBlog] = useState(null);





    const applyFilters = () => {
        const filteredJobs = browsejobss.filter((job) =>
            job.skills.toLowerCase().includes(skillsfilter.toLowerCase()) &&
            job.location.toLowerCase().includes(locationFilter.toLowerCase())
        );
        setFilteredArray(filteredJobs);
        setUserList(filteredJobs);
    };
    
    const validateLocation = (e) => {
        const filteredJobs = browsejobss.filter((job) =>
            job.location.toLowerCase().includes(e.toLowerCase())
        );
        setFilteredArray(filteredJobs);
        setUserList(filteredJobs);
    };

      const validateSkills=(e)=> {
        const filteredJobs = browsejobss.filter((job) =>
        job.skills.toLowerCase().includes(e.toLowerCase())
        );
        setFilteredArray(filteredJobs);
        setUserList(filteredJobs);    
      }

      const validateExperience=(e)=> {
        const filteredJobs = browsejobss.filter((job) =>
        job.experience.toLowerCase().includes(e.toLowerCase())
        );
        setFilteredArray(filteredJobs);
        setUserList(filteredJobs);    
      }
      const validateSalray=(e)=> {
        const filteredJobs = browsejobss.filter((job) =>
        job.salary.toLowerCase().includes(e.toLowerCase())
        );
        setFilteredArray(filteredJobs);
        setUserList(filteredJobs);    
      }
      const validateIndustry=(e)=> {
        const filteredJobs = browsejobss.filter((job) =>
        job.Industry.toLowerCase().includes(e.toLowerCase())
        );
        setFilteredArray(filteredJobs);
        setUserList(filteredJobs);    
      }

    const onclickChange = (jobId) => {
        const jobsList = browsejobss.find(jobsList => jobsList.uniqueNo === jobId);
        console.log(jobsList);
        setBrowseJObsBlog(jobsList);

    }

    console.log(BrowseJObsBlog);










    
    const UserEnteredDetails = props;

    const { uniqueNo,
        experience,
        location,
        Industry,
        Designation,
        Education,
        skills,
        company } = UserEnteredDetails

    return (
        <div className='container'>
            <div className='row'>
                <Header/>
                <div class="col-12   first  ">
                    <div class="col-md-4"></div>
                    <div class="row">
                        <div class="col-5"> </div>
                        <div class="col-2">
                            <p>Home <span>{">"}</span> Jobs</p>
                        </div>
                        <div class="col-4"> </div>
                    </div>
                    <div class="input-group mb-3 p-2">
                        <div className='col-2 m-2'></div>

                        <div className="col-md-4 col-12 d-flex flex-row m-3 "
                            style={{ backgroundColor: 'white', height: '40px', width: '320px', borderRadius: '10px', marginLeft: '150px' }}>
                            <span class="px-1 mt-1"> <i class="fa-solid fa-location-dot"></i> </span>
                            <span class="px-5 mt-1 "><input
                                className="w-100 dropdown-toggle"
                                style={{ border: 'none', fontSize: 'small', width: '250px' }}
                                type="search"
                                value={skillsfilter}
                                onChange={e => setSkillsfilter(e.target.value)}
                                placeholder="Enter Skills"
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
                                value={locationFilter}
                                onChange={e => setLocationFilter(e.target.value)}
                                placeholder="Enter location"
                            />
                                {/* {browsejobss.map((blog) => setUserEnteredText(e.target.value)} */}
                            </span></span>
                            <span class="px-3"> <i class="fa-solid fa-caret-down"></i></span>
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-5 "> </div>
                        <button
                            style={{ backgroundColor: '#270d44', borderRadius: '5px', color: '#ffff', marginLeft: '50px' ,width:'150px'}}
                            onClick={applyFilters} className='btn' >
                            Search
                        </button>

                        <div class="col-4"> </div>
                    </div>

                </div>
                <div class="container mt-3">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="  col-10">
                                <div class="row ">


                                    <div class="col-md-2 ">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo1" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Experiece</button>
                                        <div id="demo1" class="collapse card">
                                            <p onClick={()=>{validateExperience("0 -1")}}>0-1 years</p>
                                            <p onClick={()=>{validateExperience("2 - 3")}}> 2-3 years</p>
                                            <p onClick={()=>{validateExperience("3 - 4")}}>3-4 years</p>
                                            <p onClick={()=>{validateExperience("5 - 6")}}>4-5 years</p>
                                            <p onClick={()=>{validateExperience("6 - 7")}}>5-6 years</p>
                                            <p onClick={()=>{validateExperience("7 - 8")}}>7-8 years</p>

                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo2" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Location</button>
                                        <div id="demo2" class="collapse card">
                                            <p onClick={()=>{validateLocation("Hyderabad")}}>Hyderabad</p>
                                            <p onClick={()=>{validateLocation("Banglore")}}>Banglore</p>
                                            <p onClick={()=>{validateLocation("Chennai")}}>Chennai</p>
                                            <p onClick={()=>{validateLocation("Mumbai")}} >Mumbai</p>
                                        </div>
                                    </div>
                                    <div class="col-md-1 " >
                                        <button class=" dropdown-toggle btn" data-bs-toggle="collapse" data-bs-target="#demo3" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' ,marginLeft:'-20px' }}>Salary</button>
                                        <div id="demo3" class="collapse card">
                                            <p onClick={()=>{validateLocation("0 - 1")}}>0 - 1 LPA</p>
                                            <p onClick={()=>{validateLocation("3 - 4")}}>3 - 4 LPA</p>
                                            <p onClick={()=>{validateLocation("5 - 6")}}>5 - 6 LPA</p>
                                            <p onClick={()=>{validateLocation("6 - 7")}}>6 - 7 LPA</p>
                                            <p onClick={()=>{validateLocation("7 - 8")}}>7 - 8 LPA</p>

                                        </div>
                                    </div>


                                    <div class="col-md-2">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo4" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Industry</button>
                                        <div id="demo4" class="collapse card">
                                            <p>IT</p>
                                            <p>Marketing</p>
                                            <p>Data Science</p>
                                            <p>AWS</p>
                                            <p>SQL</p>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                    <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo5" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' ,marginLeft:'-15px' }}>Designation</button>
                                             <div id="demo5" class="collapse card">
                                            <p>Sales Executive</p>
                                            <p>Sr Developer</p>
                                            <p>HR</p>
                                            <p>Manager</p>
                                            <p>CEO</p>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                    <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo6" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Education</button>
                                        <div id="demo6" class="collapse card">
                                            <p>B-tech</p>
                                            <p>MBA</p>
                                            <p>M-Tech</p>
                                            <p>Degree</p>
                                            <p>Agriculture</p>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                    <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo7" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Skills</button>
                                     <div id="demo7" class="collapse card">
                                            <p onClick={()=>{validateSkills("JAVA")}}>JAVA</p>
                                            <p onClick={()=>{validateLocation(".Net")}}>.Net</p>
                                            <p onClick={()=>{validateLocation("MERN")}} >MERN</p>
                                            <p onClick={()=>{validateLocation(".Net")}} >Python</p>
                                            <p>C++</p>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: 'small', color: ' gray', marginTop: '20px' }}>Showing 69 results for 'Graphic Designing'</p>
                            </div>
                            <div className='col-1'></div>
                        </div>
                    </div>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className=' col-md-4 allfilters'>
                        {userList.map(blog => <ul  key={blog.uniqueNo}>
                            <div className={` card mt-3 select ${browsejobss && browsejobss.uniqueNo === uniqueNo ? "selected" : ' '}`}
                                onClick={((e) => onclickChange(blog.uniqueNo))}>


                                <div className='row'>
                                    <div className='col-8'>
                                        <h4 style={{ fontSize: 'small' }}>{blog.Designation}</h4>

                                    </div>

                                    <div className='col-4'>


                                        <p>{blog. salary}</p>


                                    </div>
                                </div>

                                <div className=''>
                                    <p>{blog.Designation}</p>
                                    <p>{blog.location}</p>
                                    <p>{blog.experience}</p>


                                </div>
                                <p style={{ textAlign: 'end', fontSize: 'x-small' }}>published One Day Ago</p>

                            </div>

                        </ul >)}

                    </div>


                    <div className='col-md-6 mt-3 card  secondCard'  >
                        {BrowseJObsBlog &&
                            <div className='card mt-3 mb-2'>
                                <div className='row'>
                                    <div className='col-5 m-4 d-flex flex-row' style={{ borderRight: '2px solid #f8f2f8' }} >
                                        <div>
                                            <img src={BrowseJObsBlog.re} width={'30px'} />
                                        </div>
                                        <div>
                                            <h5>{BrowseJObsBlog.Industry}</h5>
                                            <p>{BrowseJObsBlog.company}</p>
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
                                        <p>{BrowseJObsBlog.location}</p>
                                        <p>{BrowseJObsBlog.experience}</p>

                                    </div>
                                </div>
                                <hr></hr>

                                <div className='row'>
                                    <div className='col-5 m-2'>
                                        <p>Posted Few Hours Ago</p>
                                        <p>30</p>
                                        <p>23</p>
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

<Footer/>
            </div>

        </div>

    )
}

export default BrowseJobs;



