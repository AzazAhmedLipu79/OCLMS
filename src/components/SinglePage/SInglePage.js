 
import SingleVideo from "./SingleVideo";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { IconButton, Skeleton } from "@mui/material";
import { Fab } from "@material-ui/core";

const SinglePage = () => {
  // const { id } = useParams();  
  // const [content, setContent] = useState([]);

  // const { getUsers } = useContext(GetsContext);

  // useEffect(() => {
  //   getUsers().then(result => {
  //     setContent(result);
  //   });
  // }, []);
  
 


  const handle = useFullScreenHandle();

    return (
     <>
  
   
       <FullScreen  color="secondary" handle={handle}>
     
     <SingleVideo className="video"/>
    
     </FullScreen>
     
     <div className="mybutton">
      
     <Fab  color="secondary" onClick={handle.enter}  aria-label="fullscreen mode">
     <FullscreenIcon  className="rounded-full  " />
      </Fab>
</div>
   
  
 
     </>
    );
  };
  
  export default SinglePage;
  



  