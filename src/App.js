import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import "./styles/App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Product from "./components/Product"


const App = ()=>{
  return( <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      
    </Routes>
    <Product/>
  </Router>
    
  
  )
}

export default App