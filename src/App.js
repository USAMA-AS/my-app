import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.background = '#080f26';
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "Success")

    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForms showAlert={showAlert} heading="Enter the Text: " mode={mode}/>
          </Route>
        </Switch> */}

        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the Text: " mode={mode}/>} />
      </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;
