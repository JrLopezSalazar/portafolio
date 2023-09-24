import React from "react";
import React, { useState } from "react";
import data from "../../portafolio.json";

const ModalPortfolio1 = () => {
  
 
    const [isModalOpen, setIsModalOpen] = useState(false);
      
     
    const [selectedItemId, setSelectedItemId] = useState(null);
    
      const openModal = (itemId) => {
        setSelectedItemId(itemId);
        setIsModalOpen(true);
      };
    
      
     
    const closeModal = () => {
        
       
    setSelectedItemId(null);
        
        setIsModalOpen
    
        setIsModal
    
        setIs
    setIsModalOpen(false);

 };

    const getItemInfo = (itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);    
        if (selectedItem){
      return (
         <article>

            <h2>{selectedItem.name}</h2>
            <div>
          {selectedItem.gallery.map((image, index) => (
               <img key={index} src={image} alt={`Image ${index}`} />
             ))}
            </div>
            <p>{selectedItem.text}</p>
        </article>
      )
      return null;
    }
    return null;
}
    
    
        


  return (
     <article>
        {data.map((item) => (
        <div key={item.id}>
          <button onClick={() => openModal(item.id)}>Abrir Modal para {item.name}</button>
        </div>
      ))}


      </article>
      
 ) 
    
        
}      
export default ModalPortfolio1;
