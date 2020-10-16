import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import NasaPhoto from "./Component/NasaPhoto";
import './App.css';

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
