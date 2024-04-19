import { Carousel } from "flowbite-react";

const SliderModal = ({projectId, dbPortfolio}) => {
    //console.log(projectId)
    

  return (
    <>
    
   {/* <div className=" duration-700 ease-in-out" data-carousel-item> */}

   
   <article className="h-52 sm:h-65 xl:h-80 2xl:h-80">
        <Carousel>
          {projectId.map((imagePath, index) => (
            <img
              key={index}
              src={imagePath}
              alt={`Image ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </Carousel>
      </article>
    

    </>
  )
}
export default SliderModal;
