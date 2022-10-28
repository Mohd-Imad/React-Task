
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
// import {BrowserRouter as Router,Routes,Route}from "react-router-dom"

// import img1 from "./img/logo.png"
function App() {
  return (
    <div className="App">
      

            <BrowserRouter>

            <Link to="/"></Link>
            <Link to="/contact"></Link>

          <Routes>
            < Route exact path='/' element={<Home />} />
            < Route exact path='contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;
