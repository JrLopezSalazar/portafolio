import SliderModal from "./SliderModal";


import Moda from "./Moda"

 // {item} va como parametro dentreo del Modalporfolio
const ModalPortfolio = ({project, dbPortfolio}) => {

 //console.log(project)
  return (

    
    <article className="bg-[#F2F0F0] w-[90%] max-w-md mx-auto md:flex md:max-w-[1030px] md:max-h-[60vh] pt-4  "  >
     
    <header className=" md:w-[60%]   h-[250px] md:h-[35%] md:my-5   ">
       
         <div className="border-4 ">
         <SliderModal projectId={project?.data.gallery} dbPortfolio={dbPortfolio} /> 
          </div> 
        
    </header>

     <section className="md:w-1/2">
        <h3 className="text-center mb-4 text-2xl font-semibold md:mt-4">{project?.data.name}</h3>

      
           <div className="mb-5"> 
            <p className="text-justify mb-6 md:px-6 text-black ">{project?.data.description}</p>
                <a className="b-4 bg-[#4C5938] text-white p-2 px-3 rounded-lg md:ml-6 hover:bg-green-900 " href={project?.data.url} target="_blank">ver proyecto</a>

           </div> 
          

 
    </section> 

   

</article>
  )
};

export default ModalPortfolio;
