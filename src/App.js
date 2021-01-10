//Componenten moet geimporteerd worden zodat ze samen met deze pagina kunnen werken. 
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import NasaPhoto from "./Component/NasaPhoto";
import './App.css';

//Route aanroepen om route te gebruiken, Home als  start maken en NasaPhoto toewijzen als een path
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Route component={Home} path="/"  exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
    </div>
    </BrowserRouter>
  );
}

export default App;
