
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import 'animate.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import { useEffect } from 'react';
import Img from './Pages/Img';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Impact from './Pages/Imapct';

function App() {
   useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("API URL:", apiUrl);
  }, []);

  return (
    
    <div className="App bg-light ">
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Header' element={<Header/>}></Route>
        <Route path='/Img' element={<Img/>}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Impact' element={<Impact/>}></Route>
        
        

      </Routes>
      <Impact/>
    <Footer/>
    </div>
  );
}

export default App;
