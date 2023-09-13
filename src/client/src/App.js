import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountCreation from './ceateAccount';
import LoginPage from './loginPage';
import Home from './homePage';
// import Default from './ceateAccount';
// import BrowseJobs from './reactOwn';
// import BrowseJobsArray from './browseJobsArray';
import BrowseJobs from './reactBrowseJ';
import JobsMain from './Jobs/jobsmain';
import JobCards12 from './Jobs/jobCards1exp';
// import Jobsalert from './Jobs/jobCards1exp';
// import JobCards1221 from './Jobs/jobcards1221';
// import JobsByCompany from './Jobs/jobcardsCompany';
import JobsByCategarey from './Jobs/jobcardsCategory';
import JobsByDesignation from './Jobs/jobcardsDesignation';
import JobsBySkills from './Jobs/jobscardsSkills';
// import JobCardsExperience from './Jobs/jobcardsExp';
import JobApiEXP from './Jobs/jobsWithApiEXP';
// import JOBbyLocation from './Jobs/jobcardsCompany';
import JobsByLocation from './Jobs/jobsbylocation';
import JobsByCompany from  './Jobs/jobcardsCompany.js'
import CandateProfile from './profile/candateprofile';
import ResumeProfile from './profile/resumeProfile';
import RecuriterCreation from './recuriter';
import RecruitersLoginPage from './recuterlogin';
import Recuriter from './recuriternxt';


// import JobsByCompany from './Jobs/jobcardsCompany';
function App() {
  return (

    <div>

       <Routes>
     <Route exact path='/' element={<LoginPage/>} />
     <Route exact path='/register' element={< AccountCreation/>} />
     <Route exact path='/home' element ={<Home />}/>
     <Route exact path='/browsejobs' element ={<BrowseJobs />}/> 
    
       <Route exact path='/jobmain' element ={<JobsMain />}/>jobcardsLLoc
      
        <Route exact path='/jobcardsLLoc' element={<JobsByLocation/>}/>
        <Route exact path='/jobbycompany' element={<JobsByCompany/>}/>
        <Route exact path='/jobsbyCagegory' element={<JobsByCategarey/>}/>
        <Route exact path='/jobsbydesignation' element={<JobsByDesignation/>}/>
        <Route exact path='/jobsbyskills' element={<JobsBySkills/>}/>
        <Route exact path='/jobsbyEXP' element={<JobApiEXP/>}/>
        <Route exact path='/profile' element={<CandateProfile/>}/>
        <Route exact path='/Resume' element={<ResumeProfile/>}/>
        <Route exact path='/recuriter' element={<RecuriterCreation/>}/>
        <Route exact path='/recuriter123' element={<RecruitersLoginPage/>}/>
        <Route exact path='/recuriternxt' element={<Recuriter/>}/>
        
        <Route exact path='/rec123' element={<ResumeProfile/>}/>


      
     </Routes>
    
  
</div >
  );
}

export default App;
