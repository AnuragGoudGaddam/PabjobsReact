import React from "react";
import { useState } from "react";

let browsejobss=[
    {
        uniqueNo:12,
        experience:0-1 ,
        location:'Hyderabad',
        Industry:'It',
        Designation:'Sofware Employee',
        Education:'B-tech',
        skills:'Java',
        company:'Infosys'
    },
    {
        uniqueNo:11,
        experience:1-2 ,
        location:'Banglore',
        Industry:'It',
        Designation:'Sofware Employee',
        Education:'B-tech',
        skills:'Java',
        company:'Apple'


    },
    {
        uniqueNo:1,
        experience:2-3 ,
        location:'Hyderabad',
        Industry:'It',
        Designation:'Sofware Employee',
        Education:'B-tech',
        skills:'Java',
        company:'google'
    },
    {
        uniqueNo:2,
        experience:3-4 ,
        location:'Hyderabad',
        Industry:'It',
        Designation:'Sofware Employee',
        Education:'B-tech',
        skills:'Java',
        company:'wipro'

    },
    {
        uniqueNo:4,
        experience:3-4 ,
        location:'Chennai',
        Industry:'It',
        Designation:'Sofware Employee',
        Education:'B-tech',
        skills:'Mern',
        company:'tcs'


    }, 
    {
        uniqueNo:4,
        experience:0-1 ,
        location:'Chennai',
        Industry:'sales',
        Designation:'Sales Executive',
        Education:'m-tech',
        skills:'.net',
        company:'google'

    },
    {
        uniqueNo:5,
        experience:0-1 ,
        location:'Mumbai',
        Industry:'marketing',
        Designation:'Markting Executive',
        Education:'B-tech',
        skills:'Sql',
        company:'MI'

    },
    {
        uniqueNo:6,
        experience:5-6 ,
        location:'chennaai',
        Industry:'marketing',
        Designation:'Markting',
        Education:'B-tech',
        skills:'Java',
        company:'infosys'

    },
    {
        uniqueNo:7,
        experience:5-6 ,
        location:'chennaai',
        Industry:'marketing',
        Designation:'Markting',
        Education:'B-tech',
        skills:'Java',
        company:'infosys'

    },
    {
        uniqueNo:8,
        experience:5-6 ,
        location:'chennaai',
        Industry:'marketing',
        Designation:'Markting',
        Education:'B-tech',
        skills:'Java',
        company:'infosys'

    },
    {
        uniqueNo:9,
        experience:6-7 ,
        location:'chennaai',
        Industry:'marketing',
        Designation:'Markting',
        Education:'B-tech',
        skills:'Java',
        company:'infosys'

    },
    {
        uniqueNo:10,
        experience:7-8 ,
        location:'chennaai',
        Industry:'marketing',
        Designation:'Markting',
        Education:'B-tech',
        skills:'Java',
        company:'infosys'

    }

]
function BrowseJobsArray(props) {
    const [UserEnteredTextt,setUserEnteredText]=useState('');
    const [userList,setUserList] =useState(browsejobss);
    console.log(userList);
  
  
    const onchangeText=(event)=>{
      setUserEnteredText(event.target.value)
   }
    
   const arryItems=browsejobss.map((browse)=><li key={browse.uniqueNo}>{browse.uniqueNo}</li>)
    
   const UserEnteredDetails=props;
   
   const {uniqueNo,
      experience ,
      location,
      Industry,
      Designation,
      Education,
      skills,
      company}= UserEnteredDetails;
      return(
        <div>
            <button onChange={(e)=>(e.target.value) }value={setUserList }></button>
        <li>
            <p>{arryItems}</p>
        </li>
        </div>
      )
   }
 
   export default BrowseJobsArray;