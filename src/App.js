
// import { useState } from 'react/cjs/react.production.min';
import React, { useState } from 'react';
import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';


function App() {
const [mode, setMode]=useState('light');

const toggleMode= ()=>{
  if(mode==='light')
  {
    setMode('dark');
  }
  else{
    setMode('light');
  }
}



  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode} />
      
      <div className="container my-3">
      
      <TextForm heading="Enter the text to analyze"/>  
      {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
