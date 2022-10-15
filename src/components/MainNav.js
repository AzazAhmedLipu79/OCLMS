import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
 import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "98%",
    position: "fixed",
    bottom: '1%',
    backgroundColor: "#2d313a",
    zIndex: 100,
    borderRadius:'50px',
   left:"1%",
   right:"1%" 
   
  },
});
  
// function refreshPage() {
//   window.location.reload(true);
// }


export default function SimpleBottomNavigation() {
  const classes = useStyles();
  

  return (
    <BottomNavigation
  
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
     component={RouterLink}
     to="/"
       style={{ color: "white" }}
        label="Home"
        icon={<WhatshotIcon />}
      />
      
      <BottomNavigationAction
        component={RouterLink}
        to="/refresh"
         style={{ color: "white" }}
        label="Refresh"
        icon={<RefreshIcon />}
      />
      <BottomNavigationAction
        component={RouterLink}
        to="/subseries"
        style={{ color: "white" }}
        label="Sub Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
   component={RouterLink}
   to="/search"
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
// onClick={refreshPage}