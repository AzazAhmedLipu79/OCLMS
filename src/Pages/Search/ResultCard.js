import React, { Component }  from 'react';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Link } from 'react-router-dom';

const ResultCard = ({data}) => {
    const bgstyle = {
        color:"black",
        backgroundColor: "DodgerBlue",
      };
 
    const clr = data.SubjectName;

    switch (true) {
      
        case clr == "Physics":
       bgstyle.backgroundColor ="#ffedd5";
       bgstyle.color="#f97316"
            break;

            case clr == "Chemistry":
                bgstyle.backgroundColor ="#fee2e2";
                bgstyle.color="#ef4444"
                break;
         
                
                case clr == "Biology":
                    bgstyle.backgroundColor ="#dcfce7";
                    bgstyle.color="#22c55e"
                    break;
                     
                    case clr == "Math":
                        bgstyle.backgroundColor ="#dbeafe";
                        bgstyle.color="#3b82f6"
                        break;
                     
         
        default:
            bgstyle.backgroundColor ="gray";
    }
 
  return (
    <>
         <div className="max-w-2xl px-8 py-4 mx-auto backdrop-blur-3xl bg-slate-100	 rounded-lg shadow-md  hover:shadow-2xl" >
  <div className="flex items-center justify-between">
    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{data?.Timestamp.substring(0, 10)}</span> 
    <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" style={bgstyle}>{data?.SubjectName}</p>
  </div> 
  <div className="mt-2">
         <Link to={`/watch/${data?.ClassID}`} className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{data?.ChapterName}</Link> 
    {/* <p className="mt-2 text-gray-600 dark:text-gray-300">D</p> */}
    <tr className="h-3"></tr> 
  </div> 
  <div className="flex items-center justify-between mt-4" >
    <Link to={`/watch/${data?.ClassID}`}  className="text-blue-600  bg-blue-200 px-2 py-1 rounded focus:animate-ping "
    style={{marginLeft:'-10px'}}
    > 
   
    <FullscreenIcon/> Watch</Link> 
    <div className="flex items-center">
    
      <span className="font-bold text-sm text-center text-gray-700  cursor-pointer dark:text-gray-200">{data?.Instructor}</span>
    </div>
  </div>
</div>
<tr className="h-3"></tr> 
      
    </>
  );
};

export default ResultCard;
