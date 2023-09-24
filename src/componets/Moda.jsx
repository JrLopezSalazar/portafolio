import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ModalPortfolio from "./ModalPortfolio";





const Moda = ( { itemModal, isOpen, closeModal, selectedProjectId, dbPortfolio }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("5xl");
  const [selectedItemId, setSelectedItemId] = useState(null);

  // const handleOpen = (size) => {
  //   setSize(size);
    
  // };

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const selectedProject = dbPortfolio.find((project) => project.id === selectedProjectId);

  return (
    <Modal size="5xl" isOpen={isOpen} onClose={closeModal}>
      <ModalContent className="border-4 border-red-500 h-[450px] md:h-[420px] mr-5 flex mb-[190px] md:w-[1000px]   bg-[#F2F0F0]">

      
    
      {selectedProject && <ModalPortfolio project={selectedProject} dbPortfolio={dbPortfolio} />}

      </ModalContent>
      <ModalFooter  className="bg-[#101b17] text-white flex gap-x-7">
        <Button color="secondary" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}


export default Moda;
