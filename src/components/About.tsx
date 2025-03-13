import React from "react";
import { Code, Database, Server, Apple as Api } from "lucide-react";

const skills = [
  { name: "Java", icon: Code },
  { name: "Spring Boot", icon: Server },
  { name: "SQL Server", icon: Database },
  { name: "API REST", icon: Api },
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 mb-16">
          <p className="mb-4">
            Atualmente sou estudante de Sistemas para Internet na UNIESP, onde
            venho desenvolvendo uma sólida base em desenvolvimento de software e
            tecnologias web.
          </p>
          <p>
            Como desenvolvedor backend, tenho paixão por criar soluções robustas
            e escaláveis. Minha experiência inclui o desenvolvimento de APIs
            RESTful, integração com bancos de dados e implementação de
            arquiteturas orientadas a serviços.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="p-6 text-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <Icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-medium text-gray-900">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
