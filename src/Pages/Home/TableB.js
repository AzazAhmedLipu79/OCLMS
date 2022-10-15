import { Divider } from "@material-ui/core";

import React  from 'react';
import { Link } from "react-router-dom";

const TableB = ({data, index,lengthO, age}) => {
 
 
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
            <tr className="h-3  "></tr>
        
          
            <tr  index={index} className=" cursor-move	 border-t first:border-t-0 flex p-1 md:p-3   md:table-row flex-col w-full flex-wrap">
        {/* <tr tabIndex="0" className=" focus:outline-none  h-16 border ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100 rounded"> */}
        <td>   <Divider /></td>               
                                    <td  className="focus:text-indigo-600 ">
                                        <div className="flex items-center pl-3">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">

<button className="text-2xl pr-8 py-4 text-gray-400 after:content-['•']"> 
{(age == 1) ? ( lengthO - index +   " " ) : index+1}
</button>

                                                {
                                                    data ?   " " + data.ChapterName : (
                                                        <>
                                                         <div className="animate-pulse flex space-x-4">
                                                <div className="rounded bg-slate-300 h-5 w-24">
                                                    </div>
                                                    </div>
                                                        </>
                                                    )
                                                }
                                                
                                                 </p>
                                        </div>
                                    </td>
                                    <td className="pr-8 py-4">
                                        <div className=" flex items-center ">
                                          <img className="hidden md:block hover:animate-spin w-8 " src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-target-web-flaticons-lineal-color-flat-icons-7.png"/>
                                            <p className="text-sm leading-none text-gray-600 ">
                                                {
                                                    <button
                                                    disabled
                                                    style={bgstyle}
                                                    type="button"
                                                    className="  drop-shadow-md hover:animate-pulse w-24 inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1  text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                    
                                                  >
                                                    {data?.SubjectName}
                                                  </button>
                                                }
                                            </p>
                                        </div>
                                    </td>
                                 
                                
                                    <td className="pr-8 py-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2"> {data?.Timestamp.substring(0, 10)} </p>
                                        </div>
                                    </td>
                                  <div className="flex justify-between">
                                  <td className="pr-8 py-4">
                                        <button  className="hover:animate-pulse py-3 px-6 focus:outline-none text-sm leading-none drop-shadow-md

text-gray-700 bg-gray-100 rounded">
                                        {
                                                    data ? 
                                                    (
                                                        data?.Instructor
                                                        
                                                    )
                                                    : (
                                                        <>
                                                         <div className="animate-pulse flex space-x-4">
                                                <div className="rounded bg-slate-300 h-5 w-24"></div></div>
                                                        </>
                                                    )
                                                }
                                        </button>
                                    </td>
                                    <td className="pr-8 py-4">
                                <Link   to={`/watch/${data?.ClassID}`}>
                                <button className=" hover:animate-pulse drop-shadow-md

focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </Link>
                                    </td>
                                  </div>
                                   
                                </tr>
                                <tr className="h-3"></tr>
    </>
  );
};

export default TableB;
