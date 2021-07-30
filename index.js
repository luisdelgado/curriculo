// Formação acadêmica
const education = {
  title: "Pós-graduando em Design de Interação para Artefatos Digitais",
  institution: "CESAR School",
  period: "2020 - 2022",
};
const education2 = {
  title: "Graduado em Ciência da Computação",
  institution: "Universidade Federal de Pernambuco",
  period: "2012 - 2018",
};
const educationDatabase = [education, education2];
var educationHTML = document.getElementById("education");
for (element of educationDatabase) {
  educationHTML.innerHTML = `${educationHTML.innerHTML}
    <li>
        <h5>${element.title}</h5>
        <span>${element.institution} (${element.period})</span>
    </li>`;
}

// Projetos
const project = {
  image: "assets/saude.png",
  title: "Saúde 10 Anos no Futuro",
  subtitle: "Onde estamos e onde podemos ir",
  description:
    "Foi um trabalho de Foresight Thinking desenvolvido na disciplina Pensando Empreendimentos no Futuro em 2018. Coletar sinais, reunir tendências, fazer previsões, criar possibilidades de cenários, construir personas e...",
};
const project2 = {
  image: "assets/acidentesTransitoRecife.png",
  title: "Acidentes de Trânsito no Recife",
  description:
    "Foi o projeto para a disciplina de Visualização de Dados em 2017. Colocamos em prática conceitos vistos em sala de aula. Para isso utilizamos bases de dados abertas disponíveis pela prefeitura do Recife dos acidentes de trânsito de recife nos anos de 2015 e 2016. Utilizando a biblioteca D3 em JavaScript fiz o histograma.",
};
const project3 = {
  image: "assets/cariri.png",
  title: "TCM Cariri Olindense",
  subtitle: "Landing page",
  description:
    "Conhecida como a mais antiga troça de frevo de Olinda, foi fundada em 15 de fevereiro de 1921. Desde 2020, trabalho tanto no design, utilizando as melhores abordagens de Design Thinking, tanto no desenvolvimento Web Front-end com Angular 8.",
};
const projectsDatabase = [project, project2, project3];
var projectsHTML = document.getElementById("project");
for (element of projectsDatabase) {
  projectsHTML.innerHTML = `${projectsHTML.innerHTML}
    <div class="wrapper__div">
      <div class="div--block">
          <img src="${element.image}" alt="${element.title}" style="width:100%">
          <div class="block__container">
              <h4><b>${element.title}</b></h4> 
              ${element.subtitle ? `<h5><b>${element.subtitle}</b></h5>` : ""} 
              <p>${element.description}</p> 
          </div>
      </div>
    </div>`;
}

// Hobbies
// Filmes
