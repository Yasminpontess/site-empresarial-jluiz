import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
//import Servicos from "./pages/Servicos";
//import SobreNos from "./pages/sobrenos";
//import FooterCriador from "./components/footer/FooterCriador";

const App = () => {
  return (
    <>
      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511956576642"
        className="fixed bottom-4 right-4 bg-[#25d366] rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/imagens/WhatsApp.svg.webp" alt="WhatsApp" className="w-10 h-10" />
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-600 border-2 border-white rounded-full"></span>
      </a>

      {/* Rotas e layout */}
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
          </Routes>
          <Footer />
        </div>
        
      </BrowserRouter>
    </>
  );
};

export default App;