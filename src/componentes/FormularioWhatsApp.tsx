import React, { useState } from "react";

export default function FormularioHome() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarWhatsApp = () => {
    const numeroWhatsApp = "5511956576642"; 
    const texto = `Olá, meu nome é ${nome}.
📞 Telefone: ${telefone}
📧 E-mail: ${email}
💬 Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");

    // limpar os campos (opcional)
    setNome("");
    setTelefone("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div
      className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-300"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Envie uma mensagem
      </h3>
      <p className="text-gray-600 mb-8">
        Nossa equipe responderá o mais rápido possível.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(55) 99999-9999"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem
          </label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Descreva seu projeto ou dúvida..."
            className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
        </div>

        <button
          onClick={enviarWhatsApp}
          className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Enviar pelo WhatsApp
        </button>
      </div>
    </div>
  );
}
