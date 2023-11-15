$(document).ready(function(){
    $('.carousel').slick({
      dots: true, // Adiciona pontos indicadores abaixo do carrossel
      autoplay: true, // Inicia a reprodução automática
      autoplaySpeed: 3000, // Define a velocidade da reprodução automática em milissegundos
      fade: true, // Habilita a transição de fade in
      cssEase: 'linear' // Define a função de easing para a transição
    });
  });