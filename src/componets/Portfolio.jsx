import React, { useState } from "react";

const Portfolio = ({ project, openModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (projectId) => {
    openModal(projectId);

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //console.log(dbPortfolio.id)
  //console.log("desde Portfolio")

  return (
    // <h3 className="text-4xl grid justify-center">Proyectos</h3>
    <article className="bg-[#F2F0F0]  rounded-lg    md:flex-col ">
      

      <section>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-[240px] filter grayscale-[85%] group-hover:filter-none ">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125
              "
              src={project?.data.img}
              alt=""
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent
           to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center
           px-9 text-center transition-all duration-500 group-hover:translate-y-0"
          >
            <h2 className="font-dmserif text-3xl font-bold text-yellow-400 mb-24">
              {project?.data.name}
            </h2>
            {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {project?.data.description}
            </p> */}

            <div>
             

              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize
             text-white shadow shadow-black/60 hover:bg-green-900" onClick={() => openModal(project.id)}>Ver proyecto</button>
              {/* <button onClick={() => openModal(project?.id)}>Open Modal</button> */}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Portfolio;
