import { useEffect, useState } from "react";
import "./Header.css";
 



const Header = () => {

  const [data, setData] = useState([]);
   
 
  useEffect(() => {
   fetch(`https://zenquotes.io/api/random`)
    .then((res) => res.json()).then(result => setData(result));
  }, []);

  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
 {/* <h3>{data[0]?.q}</h3> */}
    </span>
  );
};

export default Header;

/*

1. On Scroll Loading cn

3. Header Change
onClick

*/