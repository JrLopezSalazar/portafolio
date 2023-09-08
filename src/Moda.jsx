import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ModalPortfolio from "./componets/ModalPortfolio";

const Moda = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [size, setSize] = React.useState('5xl')

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  return (
    <>
       <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>Open </Button>
        ))}  
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent className="   bg-[#F2F0F0]">
          {(onClose) => (
            <>
              <ModalPortfolio />

              <ModalFooter className="bg-[#101b17] text-white flex gap-x-7">
                <Button
                  className=""
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button onPress={onClose}>Action</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Moda;
