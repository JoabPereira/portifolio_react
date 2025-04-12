import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import fotoMinha from "../imagens/fotoMinha.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          id="início"
          className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-gray-800 text-white"
        >
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="mb-8">
              <img
                src={fotoMinha}
                alt="Joab Pereira"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-500"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Olá, sou Joab Pereira
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvedor Backend apaixonado por tecnologia
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="#contato"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Entre em contato
              </a>
              <a
                href="#projetos"
                className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Ver projetos
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/JoabPereira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/joab-pereira-2ab899260/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-blue-500" />
            </div>
          </div>
        </section>

        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Joab Pereira. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
