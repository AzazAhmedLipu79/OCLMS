import React   from 'react';

 import { FormControl, MenuItem, Select } from "@material-ui/core";
// import { SearchRounded } from "@material-ui/icons";
import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
// import Home from "./Home";
import "./Table.css";
import TableB from "./TableB";

const TableA = ({content}) => { 
   
   
    
    const [age, setAge] = useState(1);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
    age == 1 &&  (content = content.reverse());

  return (
    <div>
    {/* <!-- component --> */}
  

<div className="sm:px-6 w-full">
             <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="flex items-center justify-between">
                   <div className="flex items-center ">
                   <p tabIndex="0" className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-100"> {age==1? ("Recent") : ("All") } </p>
               
                    <p className="mx-2 font-extrabold text-transparent sm:text-lg md:text-xl lg:text-2xl   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600   ">Classes</p>
                   </div>
                    <div     className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                        <p>Sort By:</p>
                      

                        <FormControl className="  focus:text-indigo-600 focus:outline-none bg-transparent ml-1"   >
      
        <Select
     
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Recent</MenuItem>
          <MenuItem value={2}>All</MenuItem>
          <MenuItem value={3}>Upcoming</MenuItem>
        </Select>
      </FormControl>
                          
                          
                       
                    </div>
                </div>
            </div>
    {    (age != 3) ? (    <div className="bg-lime-50	 py-4 md:py-7 px-4 md:px-8 xl:px-10">
          
          <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                  <tbody>
                  <tr className="h-3"></tr> 
                  
                      {content.length!=0 || !(content) ? 
                           (content.map((data,index) => 
                          
                          (
                            
                        <TableB key={Math.random()+index} 
                            data={data} index={index} age={age} lengthO={content.length}/> 
                            
                          )    )) :  (    <Box className="flex flex-col items-center justify-center" sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>  )
                          
                      }
                   
                      <tr className="h-3"></tr>

                      <tr className="h-3"></tr>
                      <tr className="h-3"></tr>
                      <tr className="h-3"></tr>
                     
                  </tbody>
              </table>
          </div>
      </div>) : (
<div className='w-5/6'>
<br/>
<q>
• Form : <a href="https://forms.gle/pjgk8h8tBVjfJLgf8"> Click </a>
</q>
<br/>

<q>
• Spreadsheet : <a href="https://docs.google.com/spreadsheets/d/16y_MRtr_5sx0vpIlMzFH_S4SDNMMPKao5QIhDyb25fw/edit#gid=429949971"> Click </a>
</q>
<br/>
</div>

      ) }
        </div>
        </div>
    
  );
};

export default TableA;
