import Nav from './componets/Nav'
import './App.css'

import Home from './componets/Home'
import Skills from './componets/Skills'
import ListPortfolio from './componets/ListPortfolio'
import { useState } from 'react'
import data from '../portafolio.json'

import Footer from './componets/Footer'
import ContactForm from './componets/ContactForm'
import Parallax from './Parallax'




function App() {
  const [dbPortfolio, setDbPortfolio] = useState(data)


  

  return (
    <>
    

      
      <Nav />
      <Home />
      <Parallax />
      {/* <Portfolio /> */}
      <Skills />
      <ListPortfolio dbPortfolio={dbPortfolio}/>
      {/* <ModalPortfolio dbPortfolio={dbPortfolio} /> */}
    
      {/* <Moda /> */}
      < ContactForm />
      
      <Footer />
    

        
    </>
  )
}

export default App
