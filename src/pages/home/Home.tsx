import React, { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaRegClock,
  FaRegHandshake,
  FaUserCheck,
  FaHeadset,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import ShinyText from "./ShinyText";
import "./ShinyText.css";

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero convertido em TextParallaxContent */}
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/imagens/martelos-de-construcao-de-vista-superior-natureza-morta.jpg"
          subheading=""
          heading=""
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 z-10">
            <ShinyText
              text="Construindo sonhos, entregando qualidade"
              speed={3}
              className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold uppercase text-blue-800"
            />

            <p className="text-white text-lg sm:text-xl md:text-2xl mt-6 font-semibold">
              Projetos residenciais e comerciais com excelência, segurança e
              prazo garantido.
            </p>

            <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
              Mais do que construir obras, construímos histórias. Aqui na JLuiz
              Construção cada projeto é pensado para refletir o seu sonho, com
              segurança, transparência e dedicação em cada detalhe.
            </p>

            <button
              className="
    mt-8 flex items-center font-bold text-[15px]
    px-5 py-2 rounded-full
    bg-blue-900 hover:bg-blue-600
    border border-transparent
    transition-all duration-200
    active:scale-95
  "
            >
              FAÇA JÁ SEU ORÇAMENTO
              <span
                className="
      ml-2 text-lg transition-transform duration-300
      group-hover:translate-x-1
    "
              >
                →
              </span>
            </button>
          </div>
        </TextParallaxContent>
      </div>

      {/* 🔥 Nova seção: Contadores + Diferenciais */}
      <Diferenciais />

      {/* Seções adicionais */}

      <TextParallaxContent
        imgUrl="public/imagens/colocacao-de-telhas-ceramicas-colocar-argamassa-em-um-piso-de-concreto-como-preparacao-para-o-assentamento-de-ladrilhos-brancos.jpg"
        subheading="PORQUE ESCOLHER A JLUIZ CONSTRUÇÃO?"
        heading="AQUI, SEU PROJETO É NOSSO COMPROMISSO."
      >
        <div className="w-full bg-white py-16 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* 1 - Experiência */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaRegClock className="text-blue-800 text-4xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Experiência
                </h3>
                <p className="text-gray-600 text-sm">
                  Mais de 30 anos atuando no mercado de construções residenciais
                  e comerciais.
                </p>
              </div>
            </div>

            {/* 2 - Transparência */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaRegHandshake className="text-blue-800 text-4xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Transparência
                </h3>
                <p className="text-gray-600 text-sm">
                  Negociações claras, contratos bem definidos e acompanhamento
                  em cada etapa.
                </p>
              </div>
            </div>

            {/* 3 - Compromisso */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaUserCheck className="text-blue-800 text-4xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Compromisso
                </h3>
                <p className="text-gray-600 text-sm">
                  Obras entregues dentro do prazo, com segurança e qualidade
                  garantida.
                </p>
              </div>
            </div>

            {/* 4 - Qualidade */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaTools className="text-blue-800 text-4xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Qualidade
                </h3>
                <p className="text-gray-600 text-sm">
                  Utilizamos materiais de primeira linha e profissionais
                  altamente qualificados.
                </p>
              </div>
            </div>

            {/* 5 - Inovação */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaLightbulb className="text-blue-800 text-4xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Inovação
                </h3>
                <p className="text-gray-600 text-sm">
                  Projetos modernos e soluções criativas para atender cada
                  necessidade.
                </p>
              </div>
            </div>

            {/* 6 - Suporte */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaHeadset className="text-blue-800 text-4xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Suporte</h3>
                <p className="text-gray-600 text-sm">
                  Atendimento personalizado antes, durante e após a entrega da
                  obra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

export default Home;

/* -------------------- COMPONENTES -------------------- */

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

/* -------------------- CONTADOR + DIFERENCIAIS -------------------- */

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 segundos
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.span
        className="text-5xl sm:text-6xl font-bold text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {count}+
      </motion.span>
      <p className="text-gray-700 font-medium text-sm sm:text-base mt-2">
        {label}
      </p>
    </div>
  );
};

const Diferenciais = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 flex flex-col items-center justify-center">
      {/* Contadores */}
      <div className="w-full max-w-6xl grid grid-cols-3 gap-6 text-center mb-16">
        <Counter end={30} label="Anos de Experiência" />
        <Counter end={1200} label="Obras Concluídas" />
        <Counter end={550} label="Clientes Satisfeitos" />
      </div>
    </section>
  );
};
