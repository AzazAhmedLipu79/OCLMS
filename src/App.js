import React from 'react';

import {
  
  Routes,
  Route 
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
  import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core"; 
import Home from "./Pages/Home/Home";
import { GetsProvider } from "./Context/GetCreateContext";
import SubSeries from "./Pages/SubSeries/SubSeries";
import NotFound from './components/NotFound';
import Refresh from './components/Refresh'; 
import SinglePage from './components/SinglePage/SInglePage';
// import SingleVideo from './components/SinglePage/SingleVideo';

function App() {


  return (
    <>
       <GetsProvider> 
    <Header />
      <div className="app">
  
        <Container>
        
        <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/refresh" element={<Refresh />}/> 
        <Route path="/subseries" element={<SubSeries />}/> 
        <Route path="/search" element={<Search />}/> 
        <Route path="/watch/:id" element={<SinglePage />}/> 
            <Route path="*" element={<NotFound/>}/> 
        </Routes>
      
        </Container>
      
        <SimpleBottomNavigation />
  
      </div>
      </GetsProvider>
      </> 
  );
}

export default App;
