import React, { useState } from "react";
import './App.css'
import Nevbar from "./component/Nevbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
import About from "./component/about";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    } ,1500)
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" ,"Success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" ,"Success")
    }
  };
 
  

  return (
    <>
  <Router>
      <div >
      <Nevbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert ={alert}/>
       <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<Textform showAlert={showAlert} heading = "Enter the text to analyze"/>}/>
        {/* <Textform showAlert={showAlert} heading = "Enter the text to analyze"/> */}
      </Routes>
    </div>
    
     </Router> 
    </>
  );
}

export default App;

