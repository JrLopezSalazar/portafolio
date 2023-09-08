import ModalPortfolio from "./ModalPortfolio";
import Portfolio from "./Portfolio";

const ListPortfolio = ({ dbPortfolio }) => {


  return (
    <article id="portfolio" className=" bg-color-black1 brightness-50 ">
      <section
        className=" py-10 grid gap-6 justify-center grid-cols-[repeat(auto-fit,_380px)] max-w-[1200px] mx-auto"
      >
        {dbPortfolio.map((proyect) => (
          <Portfolio key={proyect.id} proyect={proyect} />
          
        ))}
      </section>
      
    </article>
  );
};

export default ListPortfolio;
