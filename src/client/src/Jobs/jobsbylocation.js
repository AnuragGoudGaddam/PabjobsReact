import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const JobsByLocation = () => {
    const [expdata, setExpdata] = useState('');
    const [search, setSearch] = useState(null);
    const [expfilter, setExpfilter] = useState([]);
    const [expLocation,setEXplocation]=useState('');


    // const [searchTerm, setSearchTerm] = useState('');
    // const [filteredButtons, setFilteredButtons] = useState('');
    const [filter, setFilter] = useState([]);

    // const []

    useEffect(() => {
        expofPeople();
    }, []);

    const expofPeople = async () => {
        const api = "https://pab-server-testing.onrender.com/api/jobs";
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRjYjJhZWI0Zjc5NDE0MTJlMGQ1NTciLCJpYXQiOjE2OTIyMDMwODB9.i_zfqEWwRqxVCpiT2dVPkIhjQanQu6SarnKNyGS_9Io';
        try {
            const response = await axios.get(api, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setExpdata(response.data);
            setExpfilter(response.data)
        } catch (error) {
            console.error("Error on fetching data", error);
        }
    };


    const filterData = () => {
        const filterBlogs = expdata.filter((job) => {
            return job?.cities && job.cities.some((eachData) =>
                eachData?.toLowerCase().includes(search?.toLowerCase())
            );
        });
        setExpfilter(filterBlogs);
    };

    // const handleButton= (buttonName) => {
    //     setExpfilter(`${buttonName}`);
    //     setSearch(`${buttonName}`) ;
    //   if (elementsss[buttonName]) {
    //     elementsss[buttonName].style.display='none';
    //   }

    // };
   
    let navigate = useNavigate();


    const elementRefs= {};

   
    const onClickbut=async(blogiid)=>{
        const selectedBlogDetails=expfilter.find((each)=>each._id===blogiid)
        console.log(selectedBlogDetails)
        setSearch(selectedBlogDetails)
        
    }
    const validateLocation = (e) => {
        const filteredJobs = expfilter.filter((job) =>
            job?.cities.includes(e));
            setExpfilter(filteredJobs);
            setEXplocation(filteredJobs);
           
          
            // if (e) {
            //     navigate('/browsejobs')
            // }
                
          
    }



    return (
        <div>

            <div className="container buttoncontainer  mt-5">
                <div class="row  ">
                    <div class=" col-md-2 " id="allJobs">
                        <a href="jobmain">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control">All Jobs</button></a>
                    </div>

                    <div class=" col-md-2" id="JobsByLocation">
                        <a href="jobcardsLLoc"> <button type="button" style={{ backgroundColor: '#270d44', color: '#ffff', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control ">Jobs By location</button> </a>
                    </div>

                    <div class="col-md-2" id="JobsByCompany">
                        <a href="jobbycompany">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn  form-control">Jobs By Company</button> </a>
                    </div>

                    <div class=" col-md-2" id="JobsByCategarey" >
                        <a href="jobsbyCagegory"> <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control">Jobs By Categary</button> </a>
                    </div>
                    <div class=" col-md-2" id="JobsByDesignation">
                        <a href="jobsbydesignation">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control">Jobs By Designation</button></a>
                    </div>

                    <div class=" col-md-2" id="JobsBySkills">
                        <a href="jobsbyskills">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control" >Jobs By Skills </button> </a>
                    </div>

                </div>

            </div >
            <div className="row m-5">

               <div className="col-md-8"></div>
                <div className="col-12 col-md-3">
                    <div class="input-group">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control" placeholder="search" value={search} onChange={e => setSearch(e.target.value)} />

                        </div>
                        <button type="button" class="btn btn-primary" onClick={filterData}>
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>


            <div className="row mt-3">
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>A</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>B</button>
                </div>

                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>C</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>D</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>E</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>F</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>G</button>
                </div>


                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>H</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>I</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>J</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>K</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>L</button>
                </div>

                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>M</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>N</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>O</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>P</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>Q</button>
                </div>

                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>R</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>S</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>T</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>U</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>V</button>
                </div>
                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>W</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>X</button>
                </div>

                <div class="col-md-1 ">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>Y</button>
                </div>
                <div class="col-md-1">
                    <button class="form-control" style={{ color: '#270d44', backgroundColor: '#fff' }}>Z</button>
                </div>
            </div>
            <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'></div>
                        {search &&
                            <div className='col-md-2' ref={el => elementRefs[expdata.buttonName] = el}>
                                <p className='para616'>{search.cities}
                                    <button onClick={onClickbut} className='cross'>✖</button></p>

                                 
                              <a href="/browsejobs">  <button className='button618' >filter selected<i class="fas fa-search"></i></button> </a>
                                
                            </div>
                        }
                    </div>
                </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-10">

                        <div className="locationsGrid">


                            {expfilter.map((blog) => (
                                <div key={blog._id} onClick={(e)=> onClickbut(blog._id )} className="" >
                                    <div className="mt-5">
                                        <div className="">
                                            <div className="">
                                                <button className="btn  " style={{ border: '1px solid black', width: '280px' }}>{blog.cities}</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default JobsByLocation;
