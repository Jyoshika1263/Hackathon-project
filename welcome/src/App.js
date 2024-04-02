import React ,{component} from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BootstrapCarouselComponent from './Components/BootstrapCarouselComponent/BootstrapCarouselComponent';
import Header from "./Components/Header/Header";
import Routing from "./Components/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";




const App = () => {
  return (
    <div>
      <Router>
      <Header />
      {/* <BootstrapCarouselComponent />  */}
      <Routing />
      </Router>
      

     
      
     
    </div>
  )
}

export default App;
