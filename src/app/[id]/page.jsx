import React from "react";
import DataAtual from "../components/data";
import { students } from "../data";
import Image from "next/image";
const obterAnoValidade = () => {
  const anoAtual = new Date().getFullYear();
  return anoAtual + 1;
};

const StudentPage = ({ params }) => {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    return (
      <div>
        <h1 className="text-2xl mb-5 text-center">
          HAHAHAHAHAHAHAHAHAHA NÓS DA O CU PORRA
        </h1>
        <Image
          src="/palhaco.png"
          alt=""
          className="mx-auto w-[min(100%,500px)]"
          width="500"
          height="500"
          quality={100}
          priority
        />
      </div>
    );
  }

  return (
    <div className="m-[2%]">
      <Image
        src="/logo.png"
        alt=""
        className="w-full pb-20 pt-20"
        width="1884"
        height="394"
        quality={100}
        priority
      />
      <h2 className="text-[#00008b] mb-2 text-3xl text-center font-bold">
        Dados do Aluno
      </h2>
      <div className="w-full h-px bg-[#00008b]">
        <div className="text-blue-900 grid grid-cols-[1fr_2fr] max-w-[1100px] lg:[&_p]:text-3xl text-sm py-3">
          <p className="font-semibold">Matrícula:</p>
          <p>{student.matricula}</p>

          <p className="font-bold">Nome:</p>
          <p>{student.nome}</p>

          <p className="font-bold">RG:</p>
          <p>{student.rg}</p>

          <p className="font-bold">Nascimento:</p>
          <p>{student.nascimento}</p>

          <p className="font-bold">Curso:</p>
          <p>{student.curso}</p>

          <p className="font-bold">Unidade:</p>
          <p>{student.unidade}</p>

          <p className="font-bold">Carteirinha:</p>
          <p>{student.carteirinha}</p>

          <p className="font-bold">Validade:</p>
          <p>JAN/{obterAnoValidade()}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;

export async function generateStaticParams() {
  return students.map((student) => ({ id: student.id }));
}
