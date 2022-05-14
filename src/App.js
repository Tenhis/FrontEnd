import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kyselyt from "./UI/Kyselyt";
import Vastaustenraportointi from "./Vastaukset/Vastaustenraportointi";
import Navbar from "./Komponentit/Navbar";

// Polut --tällä hetkellä vain yksi sivu, jolla näkyy kyselyt
function App() {
  return (
    <BrowserRouter>    
        <Navbar />     
        <Routes>   
        <Route path="/" element={ <Kyselyt />} />
        <Route path="/raportit" element={<Vastaustenraportointi />} />     
        </Routes> 
    </BrowserRouter>     
  );
}

export default App;

