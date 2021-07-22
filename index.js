// Projetos
const project = {
  image: "assets/saude.png",
  title: "Saúde 10 Anos no Futuro",
  subtitle: "Onde estamos e onde podemos ir",
  description:
    "Foi um trabalho de Foresight Thinking desenvolvido na disciplina Pensando Empreendimentos no Futuro em 2018. Coletar sinais, reunir tendências, fazer previsões, criar possibilidades de cenários, construir personas e narrativas futuras estão entre as...",
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
    "Desde 2020 tenho a oportunidade de fazer a landing page da TCM Cariri Olindense. Conhecida como a mais antiga troça de frevo de Olinda, foi fundada em 15 de fevereiro de 1921. Trabalhei tanto no design, utilizando as melhores abordagens de Design Thinking, tanto no Desenvolvimento...",
};
const projectsDatabase = [project, project2, project3];
var projectsHTML = document.getElementById("project");
projectsDatabase.forEach((project) => {
  projectsHTML.innerHTML = `${projectsHTML.innerHTML}
    <div class="wrapper__div">
    <div class="div--block">
        <img src="${project.image}" alt="${project.title}" style="width:100%">
        <div class="block__container">
            <h4><b>${project.title}</b></h4> 
            <h5><b>${project.subtitle ? project.subtitle : ""}</b></h5> 
            <p>${project.description}</p> 
        </div>
    </div>
</div>`;
});

//
