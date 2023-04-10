import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=> {
    setalert ({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert ("Dark mode has been enabled", "success");
      document.title = 'TextUtiles-Darkmode'
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert ("light mode has been enabled", "success");
      document.title = 'TextUtiles-Lightmoden'
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtiles"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element={  */}
        <Textform showAlert={showAlert} heading="Enter Your Text To Analyse Below " mode={mode}/>
        {/* }/> */}
    {/* </Routes> */}
    </div>
    
    {/* </Router> */}
    </>

  );
}

export default App;