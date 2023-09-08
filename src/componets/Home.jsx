const Home = () => {
  return (
    <main>
      <article>
          <section className="py-14 bg-[#F2F0F0] border-4 border-green-500">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="pb-6">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                    </div>
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-left text-xl font-semibold sm:text-2xl">
                                  De niño nunca imaginé que la programación sería parte de mi vida y nunca 
                                  consideré convertirme en programador.
                                 {/* Pero a veces, la vida nos presenta oportunidades inesperadas que cambian nuestro rumbo 
                                 de manera sorprendente. Esta es mi historia de cómo encontré mi pasión en el mundo 
                                 de la programación. **Capítulo 1: El Encuentro Casual** */}
                                 Mi primer encuentro con la programación fue casual. Tropecé con un curso en
                                 línea sobre desarrollo web mientras buscaba información completamente diferente. 
                                 Aunque inicialmente no me interesaba, decidí darle una oportunidad. Y ese fue el 
                                 primer paso.
                                 A medida que me sumergía en el aprendizaje de la programación, enfrenté desafíos que 
                                 me pusieron a prueba. Los conceptos y códigos parecían un lenguaje extraterrestre 
                                 pero en lugar de rendirme, me intrigaron los problemas y la resolución de problemas. 
                                 En ese momento me comenzo a apasionar la programación. 
                                 </p>
                        </blockquote>
                        <div className="mt-6">
                          
                            {/* <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-16 h-16 mx-auto rounded-full" /> */}
                            <div className="mt-3">
                                <span className="block text-gray-800 font-semibold">Martin escobar</span>
                                <span className="block text-gray-600 text-sm mt-0.5">Founder of meta</span>
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
