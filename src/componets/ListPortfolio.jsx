import ModalPortfolio from "./ModalPortfolio";
import Portfolio from "./Portfolio";
import SliderModal from "./SliderModal";

const ListPortfolio = ({ dbPortfolio }) => {


  return (
    <article id="portfolio" className="h-full bg-[#14110a]  md:h-[900px] pt-[70px] ">
      <h3 className="text-white text-3xl md:text-6xl font-Poppins font-light justify-center flex pb-6">Proyectos</h3>
      <section
        className="animate-fade-down py-10 grid gap-6 justify-center grid-cols-[repeat(auto-fit,_380px)] max-w-[1200px] mx-auto"
      >
        {dbPortfolio.map((proyect) => (
          <Portfolio key={proyect.id} proyect={proyect} />
          // <SliderModal key={proyect} proyect={proyect} />
          
        ))}
      </section>
      
    </article>
  );
};

export default ListPortfolio;
