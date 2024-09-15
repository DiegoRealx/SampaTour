function pesquisar(dados) {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); 
  console.log(campoPesquisa);

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  let resultados = "";

  for (let dado of pontosTuristicos) {
    if (
      dado &&
      (dado.titulo.toLowerCase().includes(campoPesquisa) || 
       (dado.tags && dado.tags.some(tag => tag.toLowerCase().includes(campoPesquisa))))
    ) {
      resultados += `
        <div class="item-resultado">
          <h2>
            ${dado.titulo}
          </h2>
          <p class="descrisao-meta">${dado.descricao}</p>
          <p><strong>Horário de Funcionamento:</strong> ${dado.horarioFuncionamento}</p>
          <p><strong>Preço do Ingresso:</strong> ${dado.precoIngresso}</p>
          <p><strong>Endereço:</strong> ${dado.endereco}</p>
          <p><strong>Transporte Público:</strong> ${dado.transportePublico}</p>
          <p><strong>Estacionamento:</strong> ${dado.estacionamento}</p>
          <p><strong>Acessibilidade:</strong> ${dado.acessibilidade}</p>
          <p><strong>Atrações:</strong> ${dado.atracoes}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>`;
    }
  }

  section.innerHTML = resultados || "<p>Nada foi encontrado</p>";
}






