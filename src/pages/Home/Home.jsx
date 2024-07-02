import { RiJavascriptFill } from "react-icons/ri";
import OzielImg from "../../../public/OzielImg.jpg";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMysql, SiPostman, SiSequelize } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaFigma } from "react-icons/lia";
import { FaGitAlt } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <section className="w-full h-screen flex flex-col justify-center items-center md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-8 ">
        <div className=" flex  justify-center shadow-lg shadow-emerald-400  p-3 items-center rounded-full bg-[radial-gradient(rgba(0,0,0,0.15)_60%,_transparent_0),_radial-gradient(#131926,_68%,_transparent_0),_linear-gradient(to_top_right,_#67e8f9_0%,_#6ee7b7_1%)]">
          <img
            src={OzielImg}
            alt="Programming"
            className="md:w-96 md:h-96 h-80 w-80 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-16">
        <Link
          to="https://github.com/devoziel-s"
          className="flex justify-end hover:scale-105 hover:text-emerald-300 duration-300"
        >
          <FaGithub size='15%' />
        </Link>
        <Link
          to="https://www.linkedin.com/in/devozielsousa/"
          className="flex justify-start hover:scale-105 hover:text-emerald-300 duration-300"
        >
          {" "}
          <FaLinkedin size="15%" />
        </Link>
        </div>
      </div>
      <div
        style={{ borderRadius: "29% 71% 73% 27% / 48% 41% 59% 52%" }}
        className="md:px-24 p-4 gap-5 h-full flex flex-col items-start justify-center bg-slate-800"
      >
        <h1 className="text-2xl text-emerald-300 font-medium">
          OLÁ, TUDO BEM?👋🏾
        </h1>
        <h1 className="text-white font-bold text-6xl">Me chamo Oziel.</h1>
        <p className=" text-2xl text-zinc-400 ">
          Sou desenvolvedor web Full-Stack apaixonado por tecnologia e
          programação. Estou feliz por sua visita!
        </p>
      </div>
    </section>
    <hr className="opacity-10 mt-11" />
    <section className="h-screen w-full">
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-4xl my-14 text-emerald-300">
          TECNOLOGIAS & FERRAMENTAS
        </h1>
        <div className="grid grid-cols-3 w-full h-full items-center justify-items-center">
          <h1 className="flex flex-col items-center">
            <RiJavascriptFill size="35%" />
            <span>JavaScript</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <FaReact size="35%" />
            <span>React</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <FaNodeJs size="35%" />
            <span>NodeJS</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <SiMysql size="35%" />
            <span>MySQL</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <SiPostman size="35%" />
            <span>Postman</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <SiSequelize size="35%" />
            <span>Sequelize</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <BiLogoPostgresql size="35%" />
            <span>Postgresql</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <LiaFigma size="35%" />
            <span>Figma</span>
          </h1>
          <h1 className="flex flex-col items-center">
            <FaGitAlt size="35%" />
            <span>Git</span>
          </h1>
        </div>
      </div>
    </section>
  </>
);
