import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Katalog from "./components/Katalog";
import Vacancies from "./components/Vacancies";
import AboutCompany from "./components/AboutCompany";
import OurPartners from "./components/OurPartners";


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
            <Route path='/' index element={<Header/>}/>
            <Route path='order'  element={<Advantages/>}/>
            <Route path='catalog'  element={<Katalog/>}/>
            <Route path='vacancies'  element={<Vacancies/>}/>
            <Route path='aboutCompany'  element={<AboutCompany/>}/>
            <Route path='ourPartners'  element={<OurPartners/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
