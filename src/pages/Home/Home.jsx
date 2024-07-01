import profileImg from "../../../public/profileImg.jpeg";

export const Home = () => (
  <div className="p-4">
  
  <section className="my-8">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 h-full p-4 relative">
        <div className="h-full w-full overflow-hidden relative">
          <img 
            src={profileImg} 
            alt="Programming" 
            className="w-50% rounded-full"
            
          />
        </div>
      </div>
      <div className="md:w-1/2 p-4 relative z-10">
        <p>
          Olá, meu nome é Oziel, nascido e crescido em Aparecida de Goiânia, GO. Desde criança sou apaixonado por tecnologia. Terminei o ensino médio em 2022 e atualmente estou cursando programação na @Programadores do Amanhã.
        </p>
      </div>
    </div>
  </section>
</div>
);