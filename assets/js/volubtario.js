const bairros = {
  central: [
    "Auxiliadora", "Azenha", "Bela Vista", "Bom Fim", "Centro Histórico",
    "Farroupilha", "Floresta", "Independência", "Jardim Botânico",
    "Marcílio Dias", "Menino Deus", "Moinhos de Vento", "Mont Serrat",
    "Petrópolis", "Praia de Belas", "Rio Branco", "Santa Cecília", "Santana"
  ],
  norte: [
    "Anchieta", "Arquipélago", "Boa Vista", "Cristo Redentor", "Farrapos",
    "Higienópolis", "Humaitá", "Jardim Floresta", "Jardim Itú Sabará",
    "Jardim Leopoldina", "Jardim Lindóia", "Jardim São Pedro", "Navegantes",
    "Passo da Areia", "Passo das Pedras", "Rubem Berta", "Santa Maria Goretti",
    "Sarandi", "São Geraldo", "São João", "São Sebastião", "Vila Ipiranga"
  ],
  sul: [
    "Aberta dos Morros", "Belém Novo", "Belém Velho", "Camaquã", "Cascata",
    "Cavalhada", "Chapéu do Sol", "Cristal", "Espírito Santo", "Glória",
    "Guarujá", "Hípica", "Ipanema", "Jardim Isabel", "Lageado", "Lami",
    "Medianeira", "Nonoai", "Pedra Redonda", "Pitinga", "Ponta Grossa",
    "Restinga", "Santa Teresa", "Serraria", "São Caetano", "Teresópolis",
    "Tristeza", "Vila Assunção", "Vila Conceição", "Vila Nova"
  ],
  leste: [
    "Agronomia", "Alto Petropolis", "Bom Jesus", "Cel. Aparício Borges",
    "Chácara das Pedras", "Jardim Carvalho", "Jardim do Salso",
    "Lomba do Pinheiro", "Morro Santana", "Mário Quintana", "Partenon",
    "Protásio Alves", "Santo Antônio", "São José", "Três Figueiras",
    "Vila Jardim", "Vila João Pessoa"
  ]
};

function mostrarBairros() {
  const zona = document.getElementById("zona").value;
  const bairroSelect = document.getElementById("bairro");
  const bairrosContainer = document.getElementById("bairrosContainer");

  // Limpa os bairros anteriores
  bairroSelect.innerHTML = '<option value="">Selecione um Bairro</option>';

  if (zona) {
    bairrosContainer.style.display = "block";
    bairros[zona].forEach(bairro => {
      const option = document.createElement("option");
      option.value = bairro;
      option.textContent = bairro;
      bairroSelect.appendChild(option);
    });
  } else {
    bairrosContainer.style.display = "none";
  }
}