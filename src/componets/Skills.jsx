import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#F2F0F0] py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Who's using Float UI?
          </h3>
          <p className="text-gray-600 mt-3">
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
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-3">
            {/* LOGO 1 */}
            <li>
              <img src="./images/html5.png" alt="" />
            </li>

            {/* LOGO 2 */}
            <li>
              <img src="./images/css3.png" alt="" />
            </li>

            {/* LOGO 3 */}
            <li>
              <img src="./images/javascript.png" alt="" />
            </li>

            {/* LOGO 4 */}
            <li>
              <img src="./images/react.png" alt="" />
            </li>

            {/* LOGO 5 */}
            <li>
              <img src="./images/github.png" alt="" />
            </li>

            {/* LOGO 6 */}
            <li>
              <img src="./images/tailwind.png" alt="" />
            </li>

            {/* LOGO 7 */}
            <li>
            
            </li>

            {/* LOGO 8 */}
            {/* <li>
              <svg
                className="w-28 my-auto"
                viewBox="0 0 121 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.9251 32.4265L39.3932 28.995C41.0006 30.1854 43.0973 30.8155 45.1945 30.8155C46.7323 30.8155 47.7107 30.2205 47.7107 29.3103C47.6756 26.7891 38.4494 28.7499 38.3792 22.4113C38.3441 19.1898 41.2102 16.7037 45.2646 16.7037C47.6756 16.7037 50.0875 17.2992 51.7997 18.665L50.4279 22.1697C48.8525 21.1567 46.9067 20.4504 45.0546 20.4504C43.7965 20.4504 42.9575 21.0454 42.9575 21.8163C42.9925 24.3024 52.2895 22.9366 52.3942 28.995C52.3942 32.2866 49.5978 34.5978 45.6135 34.5978C42.6783 34.5978 39.9871 33.8976 37.9246 32.4265H37.9251ZM96.3831 27.7524C96.0125 28.4109 95.4735 28.9589 94.8212 29.3403C94.169 29.7217 93.427 29.9227 92.6715 29.9228C90.3167 29.9228 88.4079 28.0101 88.4079 25.6508C88.4079 23.2914 90.3167 21.3787 92.6715 21.3787C93.427 21.3788 94.169 21.5798 94.8212 21.9612C95.4735 22.3426 96.0125 22.8906 96.3831 23.5491L100.465 21.2835C98.9359 18.5513 96.0197 16.7037 92.6715 16.7037C87.7398 16.7037 83.742 20.7091 83.742 25.6508C83.742 30.5919 87.7398 34.5978 92.6715 34.5978C96.0197 34.5978 98.9359 32.7502 100.465 30.018L96.3831 27.7524ZM55.0427 34.2474H60.1453V9.25586H55.0432L55.0427 34.2474ZM103.042 9.25586V34.2474H108.144V26.76L114.19 34.2474H120.713L113.024 25.3525L120.153 17.0526H113.911L108.144 23.9531V9.25586H103.042ZM75.8655 17.0536V19.0851C75.027 17.6841 72.9649 16.7037 70.7981 16.7037C66.3245 16.7037 62.7948 20.661 62.7948 25.6332C62.7948 30.6055 66.3245 34.5978 70.7981 34.5978C72.9649 34.5978 75.027 33.6174 75.8655 32.2164V34.2474H80.9681V17.0536H75.8655ZM75.8655 27.787C75.1317 29.0125 73.5939 29.9223 71.8817 29.9223C69.5264 29.9223 67.6177 28.0101 67.6177 25.6508C67.6177 23.2914 69.5264 21.3787 71.8817 21.3787C73.5939 21.3787 75.1317 22.3241 75.8655 23.5842V27.787Z"
                  fill="black"
                />
                <path
                  d="M10.9783 8.70361C9.32472 8.70361 7.98442 10.0469 7.98442 11.7035C7.98402 12.0971 8.06115 12.4868 8.21139 12.8506C8.36163 13.2143 8.58205 13.5449 8.86006 13.8235C9.13806 14.1021 9.46822 14.3231 9.83166 14.4741C10.1951 14.6251 10.5847 14.703 10.9783 14.7034H13.9727V11.7035C13.9733 10.9086 13.6582 10.1461 13.0967 9.58348C12.5352 9.0209 11.7732 8.70441 10.9783 8.70361ZM10.9783 16.7033H2.99412C1.34055 16.7033 0.000244141 18.0466 0.000244141 19.7037C0.000244141 21.3603 1.34055 22.7036 2.99412 22.7036H10.9788C12.6319 22.7036 13.9727 21.3603 13.9727 19.7037C13.9727 18.0466 12.6319 16.7033 10.9783 16.7033Z"
                  fill="#36C5F0"
                />
                <path
                  d="M29.9412 19.7037C29.9412 18.0466 28.6004 16.7033 26.9468 16.7033C25.2932 16.7033 23.9529 18.0466 23.9529 19.7037V22.7036H26.9468C27.7417 22.7028 28.5037 22.3863 29.0652 21.8237C29.6268 21.2612 29.9418 20.4986 29.9412 19.7037ZM21.957 19.7037V11.7035C21.9577 10.9086 21.6426 10.1461 21.081 9.58348C20.5195 9.0209 19.7575 8.70441 18.9626 8.70361C17.3091 8.70361 15.9688 10.0469 15.9688 11.7035V19.7032C15.9688 21.3608 17.3091 22.7041 18.9626 22.7041C19.7575 22.7033 20.5195 22.3868 21.081 21.8242C21.6426 21.2617 21.9577 20.4991 21.957 19.7042"
                  fill="#2EB67D"
                />
                <path
                  d="M18.9626 38.7036C19.7575 38.7028 20.5195 38.3863 21.081 37.8237C21.6426 37.2612 21.9577 36.4986 21.957 35.7037C21.9577 34.9088 21.6426 34.1463 21.081 33.5837C20.5195 33.0211 19.7575 32.7046 18.9626 32.7038H15.9688V35.7037C15.9688 37.3603 17.3091 38.7036 18.9626 38.7036ZM18.9626 30.7039H26.9473C28.6004 30.7039 29.9412 29.3606 29.9412 27.7035C29.9418 26.9086 29.6268 26.1461 29.0652 25.5835C28.5037 25.0209 27.7417 24.7044 26.9468 24.7036H18.9626C17.3091 24.7036 15.9688 26.0469 15.9688 27.7035C15.9684 28.0971 16.0455 28.4868 16.1957 28.8506C16.346 29.2143 16.5664 29.5449 16.8444 29.8235C17.1224 30.1021 17.4526 30.3231 17.816 30.4741C18.1794 30.6251 18.5691 30.703 18.9626 30.7034"
                  fill="#ECB22E"
                />
                <path
                  d="M1.51064e-06 27.7035C-0.000393626 28.0971 0.0767319 28.4868 0.226974 28.8506C0.377217 29.2143 0.597634 29.5449 0.875642 29.8235C1.15365 30.1021 1.4838 30.3231 1.84725 30.4741C2.2107 30.6251 2.60032 30.703 2.99388 30.7034C3.78875 30.7026 4.55075 30.3861 5.11229 29.8235C5.67383 29.261 5.98892 28.4984 5.98826 27.7035V24.7036H2.99388C1.3403 24.7036 1.51064e-06 26.0469 1.51064e-06 27.7035ZM7.98417 27.7035V35.7032C7.98417 37.3603 9.32448 38.7036 10.9781 38.7036C11.7729 38.7028 12.5349 38.3863 13.0965 37.8237C13.658 37.2612 13.9731 36.4986 13.9724 35.7037V27.7035C13.9728 27.3099 13.8957 26.9201 13.7454 26.5563C13.5951 26.1925 13.3747 25.8619 13.0966 25.5833C12.8186 25.3048 12.4883 25.0837 12.1248 24.9327C11.7613 24.7818 11.3716 24.7039 10.9781 24.7036C9.32448 24.7036 7.98417 26.0469 7.98417 27.7035Z"
                  fill="#E01E5A"
                />
              </svg>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
