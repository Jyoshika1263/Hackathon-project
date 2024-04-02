import React from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Faculty from "../Faculty/Faculty";
import Department from "../Department/Department";
import IT from "../IT/IT";
import CSE from "../CSE/CSE";
import ECE from "../ECE/ECE";
import AIDS from "../AI-DS/AI-DS";

import BootstrapCarouselComponent from "../BootstrapCarouselComponent/BootstrapCarouselComponent";


import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
   <div>
      
        <Routes>
        <Route path="/home" element=
                {<BootstrapCarouselComponent />} />
            <Route path="/signin" element=
                {<Login />} />
            <Route path="/signup" element={
              <Signup/>}/>
            <Route path="/faculty" element={
              <Faculty />}/>
               <Route path="/it" element={
              <IT />}/>
              <Route path="/cse" element={
              <CSE />}/>
              <Route path="/ece" element={
              <ECE />}/>
              <Route path="/ai-ds" element={
              <AIDS />}/>
              <Route path="/department" element={
              <Department />}/>

        </Routes>
       
        </div>
        
    
  );
};

export default Routing;