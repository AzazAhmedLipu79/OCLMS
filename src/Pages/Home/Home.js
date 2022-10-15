 import "./Home.css";

 import TableA from "./TableA";
import {GetsContext} from "../../Context/GetCreateContext"
import React, { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const { getUsers } = React.useContext(GetsContext);

  React.useEffect(() => {
    getUsers().then(result => {
      setContent(result);
    });
  }, []);
       

  return (
    <div className="scroll-smooth bg-slate-900">
      <span className="pageTitle">Trending Classes</span>
      <TableA content={content}/>
 
       
    </div>
  );
};

export default Home;
