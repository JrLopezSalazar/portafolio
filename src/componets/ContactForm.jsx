import React from "react";

const ContactForm = () => {
  return (
    // <div className=" container my-24 mx-auto md:px-6">

    <article className="bg-[#3C4742] py-3 pb-24 text-center md:pt-20  ">
      <h2 className=" text-white mb-3 text-4xl md:text-7xl
       pt-10 font-Poppins font-bold md:flex md:ml-[220px]">Contactame</h2>
       
      <hr className="md:h-2 md:w-28 md:border-4 bg-black border-black md:ml-[350px] md:mt-8 absolute" />
      <h3 className="text-4xl md:text-7xl mb-6  md:mb-24 relative font-semibold font-Poppins text-black md:ml-[250px] ">
       Tienes un proyecto?</h3>

      <div className="mx-auto h-[545px] md:h-[340px] md:max-w-[1200px] md:px-3 w-[90%] max-w-md  md:flex gap-16">
      

      <form className="md:w-[75%]  w-full  " id="form1">

        <section className="md:flex  md:flex-colum  relative  ">
              <div className="py-10   flex md:w-full pb-16 ">

              <input
                   type="text"
                   className="absolute  md:w-[45%]   peer    min-h-[auto]   bg-transparent py-[0.39rem]
                   leading-[1.6] outline-none transition-all duration-200 ease-linear
                  focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100
                  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200
                  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                   id="exampleInput90"
                   placeholder="Name"
                   />
                        <label
                       className="absolute text-lg font-Poppins font-light pointer-events-none  top-0  mb-0 max-w-[90%] origin-[0_0] truncate
                       pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out
                       peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary
                       peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]
                       motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                       for="exampleInput90"
                       >
                           Name
                       </label>
             </div> 

             <div className="py-10  relative flex md:w-full pb-16 "> 
             <input
                       type="email"
                     className="absolute  md:w-full   peer    min-h-[auto]   bg-transparent py-[0.39rem]
                        leading-[1.6] outline-none transition-all duration-200 ease-linear
                       focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100
                       motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200
                       dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                       id="exampleInput91"
                       placeholder="Email address"
                   />
                       <label
                       className="absolute text-lg font-Poppins font-light   pointer-events-none  top-0  mb-0 max-w-[90%] origin-[0_0] truncate
                       pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out
                       peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary
                       peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]
                       motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                       for="exampleInput91"
                        >
                       Email address
                       </label>
            </div>
        </section>
        <div className="relative mb-6" data-te-input-wrapper-init>
               <textarea
                 className="peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem]
                  px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100
                  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
                   dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                 id="exampleFormControlTextarea1"
                 rows="3"
                 placeholder="Your message"
               ></textarea>
               <label
                 className="pointer-events-none absolute text-lg font-light font-Poppins top-0 left-3 mb-0 max-w-[90%] origin-[0_0]
                   truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200
                   ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary
                   peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]
                   motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
               >
                 Message
               </label>
             </div>

        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className=" w-full mb-10 text-lg font-Poppins inline-block  rounded  px-6 pt-2.5 pb-2
               font-light uppercase leading-normal text-white  border-2 border-gray-500
              transition duration-150 ease-in-out hover:bg-primary-600
              hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
              focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
              focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3)
              ,0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-
              [0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba
              (59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
              ,0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Send
        </button>

      </form>

        <section className="md:w-1/2 h-[200px]">
          <p className="text-left">Lorem ipsum dolor ebitis, sapiente consequuntur quo iusto Lorem ipsum dolor ebitis,
             sapiente consequuntur quo iustoLorem ipsum dolor ebitis, sapiente consequuntur quo iusto?</p>
        <li className="list-none md:flex mt-6 items-center justify-center gap-7 md:mt-28 flex">

        <a title="linkedin junior lopez" href="https://www.superpet.pe/"><img className="h-[66px] " src="/images/linkedin.png" alt="linkedin" /></a>
        <a className="" title="curriculum vitaejunior lopez" href="https://www.superpet.pe/"><img className="h-14" src="/images/cv.png" alt="curriculum vitae" /></a>

        </li>
        </section>
      </div>

    </article>
  );

  
};

export default ContactForm;
