import React, { useState } from 'react'; 

const Home = () => {

  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  const textoCompleto = " De niño nunca imaginé que la programación sería parte de mi vida y nunca consideré convertirme en programador. Mi primer encuentro con la programación fue casual. Tropecé con un curso en línea sobre desarrollo web mientras buscaba información completamente diferente. Aunque inicialmente no me interesaba, decidí darle una oportunidad y ese fue el primer paso. A medida que me sumergía en el aprendizaje de la programación, enfrenté desafíos que me pusieron a prueba, los conceptos y códigos parecían un lenguaje extraterrestre pero en lugar de rendirme me intrigaron los problemas y la resolución de dichos problemas. En ese momento me comenzo a apasionar la programación. "

  const toggleMostrarTexto = () => { 

    setMostrarTextoCompleto(!mostrarTextoCompleto);

  }; 
  return (
    <main>
      <article>
          <section className="py-14 bg-[#F2F0F0] ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div id="sobre mi" className="max-w-3xl mx-auto text-center">
                    <div className="pb-6">
                        <img src="/images/logodev.png" width={150} className="mx-auto" />
                    </div>
                    <figure>
                        <blockquote>
                        <div> 

      {mostrarTextoCompleto ? ( 

        <div> 

          <p className='text-gray-800 text-xl'>{textoCompleto}</p> 

          <button 

            onClick={toggleMostrarTexto} 

            className="text-blue-500 hover:underline cursor-pointer" 

          > 

            Ver menos 

          </button> 

        </div> 

      ) : ( 

        <div> 

          <p className='text-gray-800 text-left text-xl font-normal sm:text-2xl font-Poppins'  >De niño nunca imaginé que la programación sería parte de mi vida y nunca consideré convertirme en programador. Mi primer encuentro con  </p> 

          <button 

            onClick={toggleMostrarTexto} 

            className="text-yellow-400 hover:underline cursor-pointer text-2xl" 

          > 

            Ver más 

          </button> 

        </div> 

      )} 

    </div> 
                            {/* <p className="text-gray-800 text-left text-xl font-semibold sm:text-2xl">
                                  De niño nunca imaginé que la programación sería parte de mi vida y nunca 
                                  consideré convertirme en programador. 
                                 Mi primer encuentro con la programación fue casual. Tropecé con un curso en
                                 línea sobre desarrollo web mientras buscaba información completamente diferente. 
                                 Aunque inicialmente no me interesaba, decidí darle una oportunidad y ese fue el 
                                 primer paso.
                                 <br />
                                 <br />
                                 A medida que me sumergía en el aprendizaje de la programación, enfrenté desafíos que 
                                 me pusieron a prueba, los conceptos y códigos parecían un lenguaje extraterrestre 
                                 pero en lugar de rendirme me intrigaron los problemas y la resolución de dichos problemas. 
                                 En ese momento me comenzo a apasionar la programación. 
                                 </p> */}
                        </blockquote>
                        <div className="mt-6">
                          
                            {/* <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-16 h-16 mx-auto rounded-full" /> */}
                            <div className="mt-3">
                                <span className="text-2xl block text-gray-800 font-semibold">Junior López</span>
                                <span className="block text-gray-600 text-sm mt-0.5">Front end Developer</span>
                            </div>
                            <img className="w-16 h-16 mx-auto rounded-full" src="/images/fragmen.png" alt="" />
                        </div>
                    </figure>
                </div>
            </div>
        </section>

       
      </article>
    </main>
  );
};

export default Home;



