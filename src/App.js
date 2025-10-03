
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'animate.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import { useEffect } from 'react';



function App() {
   useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("API URL:", apiUrl);
  }, []);

  return (
    
    <div className="App">
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Header' element={<Header/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
