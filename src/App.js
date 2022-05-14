import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kyselyt from "./UI/Kyselyt";
import Vastaustenraportointi from "./Vastaukset/Vastaustenraportointi";
import Navbar from "./Komponentit/Navbar";

// Polut --tällä hetkellä vain yksi sivu, jolla näkyy kyselyt
function App() {
  return (
    <BrowserRouter>    
        <Navbar />     
        <Switch>   
        <Route path="/" elementt={ <Kyselyt />} />
        <Route path="/raportit" element={<Vastaustenraportointi />} />     
        </Switch> 
    </BrowserRouter>     
  );
}

export default App;

