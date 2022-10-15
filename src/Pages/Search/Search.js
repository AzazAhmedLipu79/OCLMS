import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "./Search.css"; 
import BackspaceIcon from '@mui/icons-material/Backspace';
import React,{useState } from "react";
import { GetsContext } from "../../Context/GetCreateContext"; 
 import ResultCard from "./ResultCard";
import { Skeleton, Stack } from "@mui/material";
import Credit from "../../components/Credit"
  
const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(); 
  const [filteredData, setFilteredData] = useState([]); 

  

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  }); 


  const { getUsers } = React.useContext(GetsContext);
  React.useEffect(() => {
    getUsers().then(result => {
      setContent(result);
    });
  }, []);

 
function handleFilter() {
  const newFilter = content.filter((value) => {
    if(type){
      return value.Instructor.toLowerCase().includes(searchText.toLowerCase());
    }
    else{
      return value.ChapterName.toLowerCase().includes(searchText.toLowerCase());
    }
  });


 
  if (searchText === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
}
 

React.useEffect(()=>{
  handleFilter()
}, [searchText])



  const clearInput = () => {
    setFilteredData([]);
    searchText = "";
  };

  
 
  return (
    <>


 

    <div className="container mx-auto"> 
      <ThemeProvider theme={darkTheme}>
  
  

        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search Lectures By "
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
       onClick={() =>{clearInput()}}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <BackspaceIcon fontSize="large"    />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Chapter Name" />
          <Tab style={{ width: "50%" }} label="Instructor Name" />
        </Tabs>
      

<div className="sm:px-6  w-full"> 
            <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="bg-slate-300  py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="mt-7   overflow-x-auto">
                    {/* <table className="w-full whitespace-nowrap">
                        <tbody> */}
<div className="container py-px	">




{filteredData.length!=0 || !(filteredData) ? 
                                 (filteredData.map((data,index) =>  
                                (
                              
                              <ResultCard key={index} data={data}/>
                            )    ))
                                   :
                                   (
 
                                  searchText ?
                                  
                                  ( <h2 className="text-red-500 px-8 py-6 rounded-full w-full text-center rounded text-2xl  bg-red-100 animate-pulse " >No Classes Found</h2>  ) :  (
                                    <Stack spacing={1}>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <Skeleton variant="rectangular" height={118} />
                                  </Stack>
                                    )
                            )
                                    
                            }

</div>


{/* </tbody>
</table> */}
</div>
</div>
</div>
</div>

    
      
{/* <TableB key={Math.random()+index} 
                                  data={data} index={index} lengthO={content.length}/>  */}
                                    <tr className="h-3"></tr> 
        <tr className="h-3"></tr> 
        <tr className="h-3"></tr> 
     

      {/* <div className="trending">
        






        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div> */}
      {/* {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )} */}
<Credit/>
</ThemeProvider>

    </div>
    </>
  );
}

export default Search;
