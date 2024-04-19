
import Portfolio from "./Portfolio";



const ListPortfolio = ({ dbPortfolio, openModal }) => {

   //console.log(dbPortfolio)


  return (
    <article id="portfolio" className=" bg-[#14110a]   pt-[70px] px-3 ">
      <h3 className="text-white text-3xl md:text-6xl font-Poppins font-semibold justify-center flex pb-6">Proyectos</h3>
      <section
        className="animate-fade-down py-10 grid gap-6 justify-center grid-cols-[repeat(auto-fit,_minmax(320px,1fr))] max-w-[1200px] mx-auto "
      >
        {dbPortfolio.map((project) => (
          <Portfolio key={project.id} project={project} openModal={openModal}
          
    
          />
          
        ))}
       
      </section>
      
    </article>
  );
};

export default ListPortfolio;
