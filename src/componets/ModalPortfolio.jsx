import SliderModal from "./SliderModal"
import { Carousel } from "flowbite-react"

const ModalPortfolio = ( ) => {

 
  // {dbPortfolio?.img}


  return (

    

    <article className="bg-[#F2F0F0] w-[90%] max-w-md mx-auto md:flex md:max-w-[1030px] md:max-h-[60vh] pt-4  "  >
     
        <header className=" md:w-[60%]   h-[250px] md:h-[35%] md:my-5   ">
            {/* <img className="h-full" src="https://images.unsplash.com/photo-1693761935579-06af62f5f970?ixlib=rb-4
            .0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80"  alt=""  /> */}
             <div className="border-4 ">
             <SliderModal/> 
              </div> 
            
        </header>

        <section className="md:w-1/2">
            <h3 className="text-center mb-4 text-2xl font-semibold md:mt-4">Nombre del proyecto</h3>

            <p className="text-justify mb-6 md:px-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Nam repellendus maxime quo quaerat neque ipsam doloribus
               aperiam voluptatem. Consequuntur quasi quo neque distinctio
               cupiditate earum voluptatibus nesciunt fugiat impedit nemo!</p>
               <div className="mb-5">
                    <a className="b-4 bg-[#4C5938] text-white p-2 px-3 rounded-lg md:ml-6 " href="#">ver proyecto</a>

               </div>


        </section>

    </article>
  )
}

export default ModalPortfolio