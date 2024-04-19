import Nav from './componets/Nav'
import './App.css'

import Home from './componets/Home'
import Skills from './componets/Skills'
import ListPortfolio from './componets/ListPortfolio'
import { useState } from 'react'
import Portfolio from './componets/Portfolio'
import Moda from './componets/Moda'

import Footer from './componets/Footer'
import ContactForm from './componets/ContactForm'
import Parallax from './Parallax'
import db from "./db.json"



//console.log(dbPortfolio)
function App() {
  const [dbPortfolio, setDbPortfolio] = useState(db)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
    setIsModalOpen(false);
  };


  


  

  return (
    <>
    

      
      <Nav />
      <Home />
      <Parallax />
      {/* <Portfolio /> */}
      <Skills />
      <ListPortfolio dbPortfolio={dbPortfolio} openModal={openModal}/>
      {/* <ModalPortfolio dbPortfolio={dbPortfolio} /> */}
    
      {/* <Moda /> */}
      < ContactForm  />

      <div>
      {/* <Portfolio  /> */}
      <Moda dbPortfolio={dbPortfolio} isOpen={isModalOpen}
        closeModal={closeModal}
        selectedProjectId={selectedProjectId}
 />
    </div>
      
      <Footer />
    

        
    </>
  )
}

export default App
