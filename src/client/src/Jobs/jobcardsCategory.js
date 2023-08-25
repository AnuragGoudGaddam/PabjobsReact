

import { Link } from 'react-router-dom';
import React, { useState } from 'react';




function JobsByCategarey() {
    const elementRefs = {};

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredButtons, setFilteredButtons] = useState('');
    const [filter, setFilter] = useState([]);





    const allButtons = [
        'Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor',
        'Dowlaiswaram', 'Guntur', 'Eluru', 'Kadapa', 'Kakinada', 'Kurnool',
        'Machilipatnam', 'Visakhapatnam', 'Bhilai', 'Delhi', 'New Delhi',
        'Ahmadabad', 'Dwarka', 'Faridabad', 'Bilaspur', 'Shimla', ' Jammu',
        'Bengaluru', 'Bhopal', 'Gwalior', 'Ahmadnagar', 'Mumbai', 'Nagpur',
        'Imphal', 'Kohima', 'Bhubaneshwar', 'Koraput', 'Puri', 'Puducherry', 'Amritsar',
        'Chennai', 'Hyderabad', ' Nizamabad', 'Sangareddi', 'Warangal', 'Karimnagar', 'Mahbubnagar',
        'Khammam', 'Kolkata'
    ];

    const handleSearch = () => {
        const filtered = allButtons.filter(button =>
            button.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredButtons(filtered);



    };
    const handleButtonOnClick = (buttonName) => {
        setFilter(`${buttonName}`);
        setSearchTerm(`${buttonName}`);
        if (elementRefs[buttonName]) {
            elementRefs[buttonName].style.display = 'none';
        }

    };
    return (
        <div>
            <div className="container buttoncontainer  mt-5">
                <div class="row  ">
                    <div class=" col-md-2 " id="allJobs">
                        <a href="jobmain">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control">All Jobs</button></a>
                    </div>

                    <div class=" col-md-2" id="JobsByLocation">
                        <a href="jobcardsLLoc"> <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn form-control ">Jobs By location</button> </a>
                    </div>

                    <div class="col-md-2" id="JobsByCompany">
                        <a href="jobbycompany">  <button type="button" style={{ color: 'black', fontSize: 'x-small', border: '1px solid black' }}
                            class="btn  form-control">Jobs By Company</button> </a>
                    </div>

                    <div class=" col-md-2" id="JobsByCategarey" >
                        <a href="jobsbyCagegory"> <button type="button" style={{ backgroundColor: '#270d44', color: '#ffff', fontSize: 'x-small', border: '1px solid black' }}
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

            < div className="container mt-5" >
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h5>Featured Jobs By Locations</h5>
                    </div>
                    <div className="col-12 col-md-5">

                    </div>

                    <div className="col-12 col-md-3">
                        <div class="input-group">
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control" placeholder="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

                            </div>
                            <button type="button" class="btn btn-primary" onClick={handleSearch}>
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                </div>

            </div >




            <div className=" row mt-5">
                <div className='row'>
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
                        {searchTerm &&
                            <div className='col-md-2' ref={el => elementRefs[allButtons.buttonName] = el}>
                                <p className='para616'>{filter}
                                    <button onClick={e => handleButtonOnClick(e.target.value)} className='cross'>✖</button></p>


                                <Link to="/browsejobs"><button className='button618'>filter selected<i class="fas fa-search"></i></button></Link>
                            </div>
                        }
                    </div>
                </div>



                <div className="container mt-5">

                    <div className="row mt-2">
                        {filteredButtons.length === 0 ? (
                            <p>No results found.</p>
                        ) : (
                            filteredButtons.map((button, index) => (
                                <div className="col-12 col-md-3" key={index}>
                                    <button className="buttonlocation card w-100 mb-3" onClick={() => handleButtonOnClick(button)}>{button}</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div >
        // </div>





    )
}
export default JobsByCategarey;