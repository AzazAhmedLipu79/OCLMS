import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Linkify from 'react-linkify';

import { useParams } from "react-router-dom";
 import { GetsContext } from "../../Context/GetCreateContext";
import { Skeleton } from "@mui/material";
  

const blue = {
 
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
};


const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 8px 12px;
  margin: 4px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function StrategyHome() {
  const { id } = useParams();  

  const [content, setContent] = useState([]);

  const { getUsers } = useContext(GetsContext);

  useEffect(() => {
    getUsers().then(result => {
      setContent(result);
    });
  }, []);
  

  const SingleResult = content.filter((x) => x.ClassID === id);
 


  return (
    <>
 

    
 {SingleResult[0]?.ChapterName ? (<h2  
  className=" pb-5 -left-4 -top-12 font-extrabold text-transparent   text-xl bg-clip-text bg-gradient-to-r from-gray-400 to-slate-200 "
>•  &nbsp;
{SingleResult[0]?.ChapterName} :
</h2>) : <Skeleton animation="wave" sx={{'padding':"10px 5px" , bgcolor:'gray'}}  />}
<hr/> <br/>
<div>
    
    </div>            
    <TabsUnstyled className="h-full w-full bg-purple-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100"  defaultValue={0}>
      <TabsList>
        <Tab>WorkStation</Tab>
        <Tab> Note </Tab>
        <Tab> Problem </Tab>
       
      </TabsList>

      <Box className="w-full "
    >
      <TabPanel value={0} >
     
      <Paper class="p-8 bg-slate-200  " >
      <div class="uppercase tracking-wide text-md text-indigo-900 font-bold">WorkStation</div>
      
      <p class="mt-2 text-slate-800"  >
        {/* Workstation */}
      {
    SingleResult[0]?.WorkStation ?  SingleResult[0]?.WorkStation.split("\n").map(function(item, idx) {
        return (
          <Linkify   
          >
            <span key={idx}>
                {item}
                <br/>
            </span>
            </Linkify>
         )
    }) : <>
      <Box sx={{ width: 'auto' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </>
} 

      

      </p>
    </Paper> 

      </TabPanel>
      <TabPanel value={1}> 
      <Paper class="p-8 bg-slate-200 " >
      <div class="uppercase tracking-wide text-md text-indigo-900 font-bold ">Note</div>
      
      <p class="mt-2 text-slate-800 " >
        {/* Note */}
      {
    SingleResult[0]?.Note ?  SingleResult[0]?.Note.split("\n").map(function(item, idx) {
        return (
          <Linkify   
          >
            <span   key={idx}>
                {item}
                <br/>
            </span>
            </Linkify>
         )
    }) : <>
      <Box sx={{ width: 'auto' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </>
} 
      </p>
    </Paper> 
     
    
      </TabPanel>
      <TabPanel value={2}>
      <Paper class="p-8 bg-slate-200  " >
      <div class="uppercase tracking-wide text-md text-indigo-900 font-bold">Problem</div>
      
      <p class="mt-2 text-slate-800" >
        {/* Problem */}
      {
    SingleResult[0]?.Problem ?  SingleResult[0]?.Problem.split("\n").map(function(item, idx) {
        return (
          <Linkify   
          >
            <span key={idx}>
                {item}
                <br/>
            </span>
            </Linkify>
         )
    }) : <>
      <Box sx={{ width: 'auto' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </>
} 
      </p>
    </Paper> 
      </TabPanel>
      </Box>
    </TabsUnstyled>
 
    </>
  );
}