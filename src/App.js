import React, { useState } from "react";
import './App.css'
import Nevbar from "./component/Nevbar";
import Textform from "./component/Textform";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <div className={`app ${mode}`}>
      <Nevbar title="My App" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Textform heading = "Enter the text to analyze"/>
    </div>
    
    </>
  );
}

export default App;

