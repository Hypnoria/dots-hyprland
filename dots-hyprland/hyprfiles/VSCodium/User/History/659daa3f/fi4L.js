const imagens = [
    'images/imagem1.jpg',
    'images/imagem2.jpg',
    'images/imagem3.jpg'
  ];
  
  let indexAtual = 0;
  
  function moverSlide(direcao) {
    indexAtual = (indexAtual + direcao + imagens.length) % imagens.length;
    atualizarSlide();
  }
  
  function selecionarSlide(index) {
    indexAtual = index;
    atualizarSlide();
  }
  
  function atualizarSlide() {
    document.getElementById('slide').src = imagens[indexAtual];
  }
  