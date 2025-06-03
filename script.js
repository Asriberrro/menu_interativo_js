let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');
navigation.onclick = function(){
    navigation.classList.add('active'); 
};
close.onclick = function(){
    navigation.classList.remove('active'); 
};

// 
// Este código JavaScript controla a abertura e o fechamento do menu:
// - Ao clicar na área de navegação, adiciona a classe "active" para mostrar os ícones
// - Ao clicar no botão de fechar, remove a classe "active" e os ícones voltam ao centro
//
