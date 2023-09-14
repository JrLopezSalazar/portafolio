import { useState } from 'react'


const Nav = () => {




  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
//   const navigation = [
//       { title: "Inicio", path: "javascript:void(0)" },
//       { title: "Sobre mi", path: "javascript:void(0)" },
//       { title: "Portfolio", path: "javascript:void(0)" },
//       { title: "Contacto", path: "javascript:void(0)" }
//   ]

  return (
    <header className=" h-screen w-full bg-bg-header bg-cover relative">


<nav className=" w-full  md:border-0 md:static">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="#">
                        <img className='w-[150px] h-[150px] '
                            src="/images/logode1.png"

                            alt="junior lopez developer"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          // navigation.map((item, idx) => {
                          //     return (
                          //       <li key={idx} className="text-gray-600 hover:text-indigo-600">
                          //           <a href={item.path}>
                          //               { item.title }
                          //           </a>
                          //       </li>
                          //     )
                          // })


                      }

                      <li className='text-gray-600 hover:text-red-600'> <a href='#inicio'>Inicio</a></li>
                      <li className='text-gray-600 hover:text-indigo-600'> <a href='#sobre mi'>Sobre mi</a></li>
                      <li className='text-gray-600 hover:text-indigo-600'> <a href='#portfolio'>Portfolio</a></li>
                      <li className='text-gray-600 hover:text-indigo-600'> <a href='#contacto'>Contacto</a></li>
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <a href="#" className="font-Poppins font-light py-3 px-4 text-white bg-[#3A463A]  hover:bg-[#3A463A] rounded-md shadow">
                    Modo oscuro
                </a>
              </div>
          </div>
      </nav>

      <section className=''>
          <div className="grid justify-center mt-[350px] h-[150px] text-white">
            <h3
              className="font-Poppins inline-flex h-20 pt-2 overflow-x-hidden animate-type
            group-hover:animate-type-reverse whitespace-nowrap
              mb-1 font-mono text-4xl  md:text-6xl"
            >
             Hola, mi nombre es
            </h3>

            {/* <div className=" font-mono text-xl  md:text-4xl block mb-14 ">
              Give me your name to start
            </div> */}
          </div>
          <h2 className='text-white font-Poppins font-bold md:text-6xl mx-auto flex justify-center '  >
            Junior López
          </h2>

      </section>


      </header>
  );
};

export default Nav;
