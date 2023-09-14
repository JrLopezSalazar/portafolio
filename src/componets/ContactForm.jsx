import React from "react";

const ContactForm = () => {
  return (
    // <div className=" container my-24 mx-auto md:px-6">

    <article className="bg-[#F2F0F0] py-8 text-center  ">
      <h2 className="mb-12 text-5xl font-Poppins font-bold">Contact us</h2>
      <div className="mx-auto h-[530px] md:max-w-[1200px] md:px-3 w-[90%] max-w-md  md:flex border-4 ">
      

      <form className="md:w-[60%]  w-full   " id="form1">

        <section className="md:flex md:justify-between">
              <div className="py-10  flex">
                <label className="border-b-4 border-gray-700 w-[100%] py-12" for="nombre" accesskey="n" class="required">Nombre:</label>
                <input className="hidden bg-transparent" type="text" id="nombre" name="nombre" required/>
             </div> 

             <div className="py-10   flex md:mr-[48%]"> 
                <label className="border-b-4 border-gray-700 w-[100%] py-12 " for="email" form="form1">Email</label>
                <input className="hidden bg-transparent" type="email" id="email" name="email"></input>
            </div>
        </section>
        <div className="relative mb-6" data-te-input-wrapper-init>
               <textarea
                 className="peer block min-h-[auto] w-full rounded border-b-4 bg-transparent py-[0.32rem]
                  px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100
                  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
                   dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                 id="exampleFormControlTextarea1"
                 rows="3"
                 placeholder="Your message"
               ></textarea>
               <label
                 className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0]
                   truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200
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
          className="bg-[#3C4742] w-full  inline-block  rounded bg-primary px-6 pt-2.5 pb-2
              text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]
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

        <section className="md:w-1/2">
          <p>Lorem ipsum dolor ebitis, sapiente consequuntur quo iusto?</p>
        </section>
      </div>

    </article>
  );

  //   <section className="bg-[#F2F0F0] py-8 text-center">
  //       <div className="mx-auto max-w-[700px] md:px-3">
  //         <h2 className="mb-12 text-5xl font-Poppins font-bold">Contact us</h2>

  //         <form className="">

  //           <article
  //             className=" mb-6 flex py-3 md:flex-col-2 md:flex-wrap relative w-full">

  //                 <input
  //                 type="text"
  //                 className="absolute md:w-[45%]  peer  border-b-4   min-h-[auto]   bg-transparent py-[0.39rem]
  //                   leading-[1.6] outline-none transition-all duration-200 ease-linear
  //                  focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100
  //                  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200
  //                  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
  //                 id="exampleInput90"
  //                 placeholder="Name"
  //                 />
  //                      <label
  //                     className="absolute pointer-events-none top-0  max-w-[90%] origin-[0_0]
  //                     truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 \
  //                     ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary
  //                     peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]
  //                     motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  //                     for="exampleInput90"
  //                     >
  //                         Name
  //                     </label>

  //                 <input
  //                     type="email"
  //                     className="absolute md:left-[50%] md:w-[45%]  peer border-b-4   min-h-[auto]   bg-transparent py-[0.32rem]
  //                      leading-[1.6] outline-none transition-all duration-200 ease-linear
  //                     focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100
  //                     motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200
  //                     dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
  //                     id="exampleInput91"
  //                     placeholder="Email address"
  //                 />
  //                     <label
  //                     className="absolute md:left-[50%] pointer-events-none  top-0  mb-0 max-w-[90%] origin-[0_0] truncate
  //                     pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out
  //                     peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary
  //                     peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]
  //                     motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  //                     for="exampleInput91"
  //                      >
  //                     Email address
  //                     </label>

  //           </article>

  //           <div className="relative mb-6" data-te-input-wrapper-init>
  //             <textarea
  //               className="peer block min-h-[auto] w-full rounded border-b-4 bg-transparent py-[0.32rem]
  //                 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100
  //                 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
  //                 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
  //               id="exampleFormControlTextarea1"
  //               rows="3"
  //               placeholder="Your message"
  //             ></textarea>
  //             <label
  //               className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0]
  //                 truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200
  //                 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary
  //                 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]
  //                 motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  //             >
  //               Message
  //             </label>
  //           </div>

  //           <button
  //             type="button"
  //             data-te-ripple-init
  //             data-te-ripple-color="light"
  //             className="bg-[#3C4742] mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2
  //               text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]
  //               transition duration-150 ease-in-out hover:bg-primary-600
  //               hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
  //               focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
  //               focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3)
  //               ,0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-
  //               [0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba
  //               (59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
  //               ,0_4px_18px_0_rgba(59,113,202,0.1)]"
  //           >
  //             Send
  //           </button>
  //         </form>
  //       </div>
  //     </section>
};

export default ContactForm;
