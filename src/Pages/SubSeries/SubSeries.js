import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GetsContext } from '../../Context/GetCreateContext';
import TableB from '../Home/TableB';
import { Skeleton, Stack } from '@mui/material'; 


const options = ['Physics', 'Chemistry','Math','Biology','Other'];

export default function SubSeries() { 
  const [inputValue, setInputValue] = React.useState('');
  // const [filteredData, setFilteredData] = React.useState([]); 
  const [content, setContent] = React.useState([]);


 
  const { getUsers } = React.useContext(GetsContext);
  React.useEffect(() => {
    getUsers().then(result => {
      setContent(result);
    });
  }, []);

  const Preresult = content.filter((x) => x.SubjectName === inputValue);
const result = Preresult.reverse();

  // console.log(result, inputValue)

  return (
    <div className="bg-slate-200 w-full py-4">
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
     
      <Autocomplete
      className='mx-auto mb-10 w-2/3'
       
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        // sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose Subject" />}
      />

      <div className="bg-slate-200 text-white text-bold"> 

     <table className="w-full whitespace-nowrap">
                        <tbody>
                        <tr className="h-3"></tr> 
                       
                            {result.length!=0 || !(result) ? 
                                 (result.map((data,index) => 
                                
                                (
                                  
                              <TableB key={Math.random()+index} 
                                  data={data} index={index} lengthO={result.length}/> 
                                  
                                )    )) :  (    
                                  <Stack className='w-2/3 mx-auto' spacing={1}>
                                  <Skeleton variant="text" />
                                  <Skeleton variant="circular" width={40} height={40} />
                                  <Skeleton variant="rectangular"   height={118} />
                                </Stack>
                                )
                                
                            }
                         
                            <tr className="h-3"></tr>
 
                            <tr className="h-3"></tr>
                            <tr className="h-3"></tr>
                            <tr className="h-3"></tr>
                           
                        </tbody>
                    </table>
     
      </div>
    </div>
  );
}
