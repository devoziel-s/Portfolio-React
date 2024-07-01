import OzielImg from "../../../public/OzielImg.jpg";

export const Home = () => (
  <section className="w-full h-screen flex flex-col justify-center items-center md:grid md:grid-cols-2">
      <div className=" flex justify-center items-center w-full h-full">
          <img 
            src={OzielImg} 
            alt="Programming" 
            className="md:w-96 md:h-96 h-80 w-80 rounded-full object-cover"
          />
    </div>
      <div className="md:px-24 p-4 md:gap-36 gap-5 h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl bg-[#27374D] px-4 py-2 rounded-xl">Sobre mim</h1>
        <p className="text-justify text-2xl ">
          Olá, meu nome é Oziel, nascido e crescido em Aparecida de Goiânia, GO. Desde criança sou apaixonado por tecnologia. Terminei o ensino médio em 2022 e atualmente estou cursando programação na @Programadores do Amanhã.
        </p>
      </div>
  </section>
);