import React from "react";

function DataAtual() {
  // Função para obter a data no formato desejado
  const obterDataAtual = () => {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0"); // Janeiro é 0!
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="text-blue-700">
      <hr className="border-blue-700 mb-2" />
      <p className="font-medium">Data: {obterDataAtual()}</p>
    </div>
  );
}

export default DataAtual;
