 
import SingleVideo from "./SingleVideo";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { IconButton, Skeleton } from "@mui/material";

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
   <IconButton  onClick={handle.enter}  size="large"  >
       
       <FullscreenIcon   className="rounded-full  text-blue-600  bg-blue-200" />
     </IconButton > 
 
       <FullScreen  color="secondary" handle={handle}>
     
     <SingleVideo/>
    
     </FullScreen>
     </>
    );
  };
  
  export default SinglePage;
  