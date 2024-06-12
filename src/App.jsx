import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/Header'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Projects from './assets/Pages/Projects'

import Contact from './assets/Pages/Contact'
import Footer from './assets/Footer';


const App = () => {
  return (
    
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/'  element={<Home/>}/> 
            <Route path='/About'  element={<About/>}/> 
           
            <Route path='/Projects'  element={<Projects/>}/> 
            <Route path='/Contact' element={<Contact/>}/> 
          </Routes>
          <Footer/>
          
        </div>
      </Router>


     
     
     
    
  )
}


export default App
