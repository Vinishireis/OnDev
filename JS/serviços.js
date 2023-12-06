function search() {
    // Obtém o valor digitado na barra de busca
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Realiza a lógica de busca (substitua isso com sua própria lógica)
    var searchResults = performSearch(searchTerm);

    // Exibe os resultados da busca
    displayResults(searchResults);
}

function performSearch(term) {
    // Implemente sua lógica de busca aqui
    // Pode ser uma busca em uma lista de itens, em elementos da página, ou até mesmo uma requisição Ajax para um servidor
    // Retorne os resultados da busca como uma estrutura de dados (array, objeto, etc.)
    return ['Resultado 1', 'Resultado 2', 'Resultado 3'];
}

function displayResults(results) {
    var searchResultsContainer = document.getElementById('results');
    searchResultsContainer.innerHTML = ''; // Limpa os resultados anteriores

    // Exibe os resultados na página
    results.forEach(function(result) {
        var resultElement = document.createElement('p');
        resultElement.textContent = result;
        searchResultsContainer.appendChild(resultElement);
    });
}
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();