

const ModalPortfolio = ({ dbPortfolio }) => {

 



  return (

    

    <article className="bg-[#F2F0F0] w-[90%] max-w-md mx-auto md:flex md:max-w-[1010px] md:border-4"  >
     
        <header className="   h-[370px]  my-5 border-4">
            <img className="h-full" src={dbPortfolio?.img} alt="" />
        </header>

        <section className="md:w-1/2">
            <h3 className="text-center mb-4 text-2xl font-semibold md:mt-4">Nombre del proyecto</h3>

            <p className="text-justify mb-6 md:px-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Nam repellendus maxime quo quaerat neque ipsam doloribus
               aperiam voluptatem. Consequuntur quasi quo neque distinctio
               cupiditate earum voluptatibus nesciunt fugiat impedit nemo!</p>


        <a className=" mb-4 bg-[#4C5938] text-white p-2 px-3 rounded-lg md:ml-6 " href="#">ver proyecto</a>
        </section>

    </article>
  )
}

export default ModalPortfolio