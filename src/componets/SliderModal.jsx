import { Carousel } from "flowbite-react";

const SliderModal = () => {
  return (
    //    linea de codigo segundo div <div className="hidden duration-700 ease-in-out" data-carousel-item>

    <article className="h-56 sm:h-65 xl:h-80 2xl:h-96  ">
      <Carousel>
        
          <img
            className="h-full "
            alt="..."
            src="https://images.unsplash.com/photo-1693761935579-06af62f5f970?ixlib=rb-4
          .0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        
      </Carousel>
    </article>
  );
};

export default SliderModal;
