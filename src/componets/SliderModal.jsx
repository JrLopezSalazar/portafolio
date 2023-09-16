import { Carousel } from "flowbite-react";
import { useState } from "react";
import data from '../../portafolio.json'

const SliderModal = () => {

  const [dbSlide, setDbSlider] = useState(data)
  // console.log(dbSlide.map(e => e.imgSlider.length))

  return (
    //    linea de codigo segundo div <div className="hidden duration-700 ease-in-out" data-carousel-item>

    <article className="h-56 sm:h-65 xl:h-80 2xl:h-96  ">
      <Carousel>
        
        
          {/* <img className="h-full" alt="..." src=
           {dbSlide.map(e => e?.imgSlider.length)} /> */}
         
        
      </Carousel>
    </article>
  );
};

export default SliderModal;
