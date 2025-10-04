
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
import Rform from './Pages/Rform';
import BloodRequests from './Pages/BloodRequests';
import DonorList from './Pages/DonorList';
import Donor from './Pages/DonorForm';
import Dashboard from './Pages/Dashboard';
import TamilDashboard from './Pages/TamilDashboard';
import FounderDetails from './Pages/FounderDetails';


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
        <Route path='/Rform' element={<Rform/>}></Route>
        <Route path='/BloodRequests' element={<BloodRequests/>}></Route>
        <Route path='/DonorList' element={<DonorList/>}></Route>
        <Route path='/DonorForm' element={<Donor/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/TamilDashboard' element={<TamilDashboard/>}></Route>
        <Route path='/FounderDetails' element={<FounderDetails/>}></Route>
        
        
        

      </Routes>
      
      
    <Footer/>
    </div>
  );
}

export default App;
