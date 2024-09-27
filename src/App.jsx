import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Properties from "./Pages/Properties"
import Agent from "./Pages/Agent"
import Email from "./Pages/Email"
import Navbar from "./Navbar"
import Login from "./Pages/Login"


function App() {
  

  return (
    <>
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/login" element ={<Login />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/email" element={<Email />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
         
        </Routes>
      </Router>
    </div>
     
    </>
  )
}

export default App


