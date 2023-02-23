import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  return ( 
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
   );
}

export default App;

