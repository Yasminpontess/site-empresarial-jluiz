import ShinyText from "./ShinyText";
import "./ShinyText.css";

function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-left px-6 sm:px-12"
        style={{
          backgroundImage:
            "url('/imagens/martelos-de-construcao-de-vista-superior-natureza-morta.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl text-center">
          <ShinyText
            text="Construindo sonhos, entregando qualidade"
            speed={3}
            className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold uppercase"
          />

          <p className="text-white text-lg sm:text-xl md:text-2xl mt-6 font-semibold">
            Projetos residenciais e comerciais com excelência, segurança e prazo
            garantido.
          </p>

          <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
            Mais do que construir obras, construímos histórias. Aqui na JLuiz
            Construção cada projeto é pensado para refletir o seu sonho, com
            segurança, transparência e dedicação em cada detalhe.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded text-lg shadow-lg transition">
            FAÇA JÁ SEU ORÇAMENTO →
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
