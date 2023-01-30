import './App.css';
import React from "react";
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./component/Footer";
import Users from "./pages/Users";

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='users' element={<Users/>}/>
      </Routes>

      <Footer/>
    </div>

  );
}

export default App;
