import Nav from './componets/Nav'
import './App.css'
import Portfolio from './componets/Portfolio'
import Home from './componets/Home'
import Skills from './componets/Skills'
import ListPortfolio from './componets/ListPortfolio'
import { useState } from 'react'
import data from '../portafolio.json'
import ModalPortfolio from './componets/ModalPortfolio' 
import Moda from './Moda'



function App() {
  const [dbPortfolio, setDbPortfolio] = useState(data)


  

  return (
    <>
    

      
      <Nav />
      <Home />
      <Portfolio />
      <Skills />
      <ListPortfolio dbPortfolio={dbPortfolio}/>
      {/* <ModalPortfolio dbPortfolio={dbPortfolio} /> */}
    
      <Moda />
    






      

        
    </>
  )
}

export default App
