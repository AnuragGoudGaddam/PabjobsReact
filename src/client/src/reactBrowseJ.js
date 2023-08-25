import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./headder";
import Footer from "./footer";
import { useLocation } from 'react-router-dom';


function BrowseJObs(props) {




    const [blogslist, setblogslist] = useState([]);

    const [BrowseJObsBlog, setBrowseJObsBlog] = useState(null);
    const [userSkill, setuserSkill] = useState();

    const [userCity, setuserCity] = useState();
    const [userEXP, setuserEXP] = useState();
    const [userLoc, setUserLoc] = useState();
    const [userSAL, setuserSAL] = useState();


    const {state} =useLocation();
    console.log("patrams 123",state);



    useEffect(() => {
        fetchblogs()
    }, [])

    // const fetchblogs = async () => {
    //     const api = "https://pab-server-testing.onrender.com/api/jobs";
    //     const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRjYjJhZWI0Zjc5NDE0MTJlMGQ1NTciLCJpYXQiOjE2OTIyMDMwODB9.i_zfqEWwRqxVCpiT2dVPkIhjQanQu6SarnKNyGS_9Io';
    //     try {
    //         const response = await axios.get(api, {
    //             headers: {
    //                 Authorization: `Bearer ${authToken}`
    //             }
    //         });
    //         setblogslist(response.data);
    //         console.log("hello");
    //         console.log(response.data, "rest");

    //     } catch (error) {
    //         console.error("Error fetching blogs:", error);
    //     }
    // };

    const fetchblogs = async () => {
        const api = "https://pab-server-testing.onrender.com/api/jobs";
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRjYjIyNmI0Zjc5NDE0MTJlMGQ1M2EiLCJpYXQiOjE2OTI3ODA3OTJ9.kAJiRLS9mfKamYtsGVuKvtQ06oZaKMjkVIVYBoHk41E'; // Replace with your actual authorization token
       try{
        const response =await axios.get(api, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
        });
            setblogslist(response.data);
              
            if (state?.location) {
                handlefilter(state?.location,response.data)
                
            }
        } catch (error) {
            console.error("error fetching blogs11:",error);
        }

    };
    
    


    const searchBySkills = () => {
        const filteredJobs = blogslist.filter(blog =>
            blog?.skillsets && blog?.skillsets.some(eachSkill =>
                eachSkill?.toLowerCase().includes(userSkill?.toLowerCase().trim())) &&
            blog?.cities && blog?.cities.some(eachcity =>
                eachcity?.toLowerCase().includes(userCity?.toLowerCase().trim())

            )
        );
        setblogslist(filteredJobs);
    };


    const validateExperience = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job.experience.toLowerCase().includes(e.toLowerCase()) 
        );
        setblogslist(filteredJobs);
        setuserEXP(filteredJobs);
    }


    const validateLocation = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.cities.includes(e));
        setblogslist(filteredJobs);
        setUserLoc(filteredJobs);
    }

    const validateSAL = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.salary.includes(e));
        setblogslist(filteredJobs);
        setuserSAL(filteredJobs);
    }

    const validateSkills = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.skillsets.includes(e));
        setblogslist(filteredJobs);
        setUserLoc(filteredJobs);
    }
    const validateEDU = (e) => {
        const filteredJobs = blogslist.filter((job) =>
            job?.education.includes(e));
        setblogslist(filteredJobs);
        setUserLoc(filteredJobs);
    }




    const onclickblogdetails = (blogid) => {
        const selectedJobDetails = blogslist.find((each) => each._id === blogid)
        console.log(selectedJobDetails)
        setBrowseJObsBlog(selectedJobDetails)




    }

    // console.log(userList)
    // console.log(BrowseJObsBlog);


// const handlefilter=(city,alljobs1=blogslist) =>{
//     city=Array.isArray(city)? city :[city]
//     console.log(city, alljobs1);

//     const filter123=alljobs1.filter((job)=>{
//         // return job?.cities.includes(city)
//         return job.cities.filter(v=>city.map(v =>v).includes(v)).length? true  : false;
//     })
//     console.log((filter123));

//     // const filteredJobs = alljobs1.filter((job) =>
//     //         job?.cities.includes(city));
//     // console.log(  "gasjgdga" ,job.cities);
// }
// const handlefilter = (city, alljobs1 = blogslist) => {
//     city = Array.isArray(city) ? city : [city];
//     console.log("total", city, alljobs1);
  
//     const filteredJobs = alljobs1.filter((job) => {
//         return city.some((c) => job.cities.includes(c));
//     });
//     setblogslist(filteredJobs);

//     // Now filter123 contains the filtered jobs based on the provided cities
//     console.log( "afgkjhj1221313"  , filteredJobs);
  
// };

const handlefilter = (company, alljobs1 = blogslist) => {
    company = Array.isArray(company) ? company : [company];
    const filteredJobs = alljobs1.filter((job) => {
        return company.includes(job.title);
    });
    setblogslist(filteredJobs);
    console.log("Filtered Jobs:", filteredJobs);
};




    return (
        <div>
            <Header />
            <div className="container mt-1 ">
                <div className="row">

                    <div class="col-12  first  ">
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
                                    value={userSkill}
                                    onChange={(e) => setuserSkill(e.target.value)}
                                    placeholder="Enter Skills"

                                />

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
                                    value={userCity}
                                    onChange={(e) => setuserCity(e.target.value)}


                                    placeholder="Enter location"
                                />
                                </span></span>
                                <span class="px-3"> <i class="fa-solid fa-caret-down"></i></span>
                            </div>
                        </div>

                        <div class="row m-3">
                            <div class="col-5 "> </div>
                            <div class="col-5 w-50">
                                <button style={{ backgroundColor: '#270d44', borderRadius: '5px', color: '#ffff', marginLeft: '50px' }} onClick={searchBySkills}>Search</button>
                            </div>
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
                                            <p onClick={() => { validateExperience("0-2 years") }} >0-2 years</p>
                                            <p onClick={() => { validateExperience("2-5 years") }}>2-5 years</p>
                                            <p onClick={() => { validateExperience("5-10 years") }}>5-10 years</p>

                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo2" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Location</button>
                                        <div id="demo2" class="collapse card">
                                            <p onClick={() => { validateLocation("Hyderabad") }}>Hyderabad</p>
                                            <p onClick={() => { validateLocation("Bangalore Rural") }} >Banglore</p>
                                            <p onClick={() => { validateLocation("Aurangabad") }}>Aurangabad</p>
                                            <p onClick={() => { validateLocation("Agra") }}>Agra</p>
                                            <p onClick={() => { validateLocation("Visakhapatnam") }}>Visakhapatnam</p>
                                            <p onClick={() => { validateLocation("Ajitgarh (Mohali)") }}>Ajitgarh</p>

                                        </div>
                                    </div>
                                    <div class="col-md-1 " >
                                        <button class=" dropdown-toggle btn" data-bs-toggle="collapse" data-bs-target="#demo3" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black', marginLeft: '-20px' }}>Salary</button>
                                        <div id="demo3" class="collapse card">
                                            <p onClick={() => { validateSAL("0-3 LPA") }}>0-3 LPA</p>
                                            <p onClick={() => { validateSAL("3-5 LPA") }}>3-5 LPA</p>
                                            <p onClick={() => { validateSAL("5-7 LPA") }}>5-7 LPA</p>
                                            <p onClick={() => { validateSAL("10-15 LPA") }}>10-15 LPA</p>


                                        </div>
                                    </div>


                                    <div class="col-md-2">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo4" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Industry</button>
                                        <div id="demo4" class="collapse card">

                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo5" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black', marginLeft: '-15px' }}>Designation</button>
                                        <div id="demo5" class="collapse card">

                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo6" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Education</button>
                                        <div id="demo6" class="collapse card">
                                            <p onClick={() => { validateEDU("B.Tech") }} >B.Tech </p>
                                            <p onClick={() => { validateEDU("Degree") }}>Degree</p>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <button class="btn dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#demo7" type="button"
                                            style={{ color: '#270d44', backgroundColor: '#f8f2f8', fontSize: 'small', border: '1px solid black' }}>Skills</button>
                                        <div id="demo7" class="collapse card">
                                            <p onClick={() => { validateSkills("Java") }}>JAVA</p>
                                            <p onClick={() => { validateSkills("HTML", "CSS") }}>HTML,CSS</p>
                                            <p onClick={() => { validateSkills("C") }}>C</p>
                                            <p onClick={() => { validateSkills("Manual Testing", "Automation Testing") }}>Manual Testing,Automation Testing</p>
                                            <p onClick={() => { validateSkills("Adobe Photoshop") }}>Adobe Photoshop</p>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: 'small', color: ' gray', marginTop: '20px' }}>Showing 69 results for 'Graphic Designing'</p>
                            </div>
                            <div className='col-1'></div>
                        </div>
                    </div>

                    {/* <div class=" col-md-2"> </div> */}
                    <div className='col-1'></div>
                    <div className="col-12 col-md-4 ">
                        {blogslist?.map((blog) => (
                            <div key={blog._id} blog={blog} className={` card mt-3 select ${BrowseJObsBlog && BrowseJObsBlog.id === blog._id ? "selected" : ''}`}
                                onClick={(e) => onclickblogdetails(blog._id)}
                            >

                                <div className='row'>
                                    <div className='col-8'>
                                        <h4 style={{ fontSize: 'small' }}>{blog.title}</h4>
                                    </div>

                                    <div className='col-4'>


                                        <p>{blog.salary}</p>


                                    </div>
                                </div>

                                <div className=''>
                                    <p>{blog.jobType}</p>
                                    <p>{blog.cities}</p>
                                    <p>{blog.experience}</p>
                                    <p>{blog.skillsets}</p>


                                </div>
                                <p style={{ textAlign: 'end', fontSize: 'x-small' }}>published One Day Ago</p>

                            </div>

                        ))}
                    </div>



                    <div className='col-md-6 mt-3 card  secondCard'  >
                        {BrowseJObsBlog &&
                            <div className='card mt-3 mb-2'>
                                <div className='row'>
                                    <div className='col-5 m-4 d-flex flex-row' style={{ borderRight: '2px solid #f8f2f8' }} >
                                        <div>
                                            <img src={BrowseJObsBlog.recruiter.profileImage} width={'30px'} />
                                        </div>
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
            </div >
            <Footer />
        </div>


    )
}
export default BrowseJObs;