import React from 'react';
import {Link} from 'react-router-dom'
import "./Header.css";


const Header = () => {
  return (
   <header className="header">
       <div>
           <h1>
               <Link to="/" className="logo">
                  SVECW
               </Link>
           </h1>
       </div>
      
       <div className="header-links">
           <ul>
               <li>
                   <Link to="/home">Home</Link>
               </li>
           </ul>

           <ul>
               <li>
                   <Link to="/signup">Signup</Link>
               </li>
           </ul>
           <ul>
               <li>
                   <Link to="/signin">Login</Link>
               </li>
           </ul>

           <ul>
               <li>
                   <Link to="/department">Department</Link>
               </li>
           </ul>
          
           <ul>
               <li>
                   <Link to="/faculty">Faculty</Link>
               </li>
           </ul>
           
           <ul>
               <li>
                   <Link to="/it"></Link>
               </li>
           </ul>
           <ul>
               <li>
                   <Link to="/cse"></Link>
               </li>
           </ul>
           <ul>
               <li>
                   <Link to="/ece"></Link>
               </li>
           </ul>
           <ul>
               <li>
                   <Link to="/ai-ds"></Link>
               </li>
           </ul>
       
       </div>
   </header>
  )
}

export default Header;