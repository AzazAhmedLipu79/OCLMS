import { Navigate, useLocation } from "react-router-dom";

 
const Refresh = () => {

  
 
    function deleteItems() {
        localStorage.clear();
      }

 
      deleteItems();
   
    return (
      <div>
        <span className="pageTitle">  Refreshing :D</span>
        {deleteItems &&     <Navigate replace to="/" />
}      </div>
    );
  };
  
  export default Refresh;
  