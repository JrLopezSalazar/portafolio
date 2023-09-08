import React from "react";
import { useDisclosure } from "@nextui-org/react";
import Moda from "../Moda";
import { useState } from "react";


const Portfolio = ({ proyect }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [open, setOpen] = useState(false)


  
  return (
    <article className="bg-[#F2F0F0] overflow-hidden rounded-lg     md:flex-col ">
      {/* <div className="h-[200px]">
        <img className="object-cover w-full h-full object-center" src={proyect?.img} alt="" />
      </div> */}


      <section >
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-[200px]">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={proyect?.img} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">{proyect?.name}</h2>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick = {() => setOpen(!open)} >ver  </button>
        {open ? (
        <Moda />
      ) : (
        <Moda />
      )}
      </div>
    </div>
        
      </section>
      


    </article>
  );
};

export default Portfolio;