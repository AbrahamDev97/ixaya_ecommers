import React from 'react';
import NavBarIxaya from "./Components/NavBar"
import CardIxaya from "./Components/Cards"
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarIxaya/>

      <Routes>
          <Route path="/pricing" element={ <CardIxaya />}/>

        </Routes>
    
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;