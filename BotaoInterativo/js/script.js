// Pega os elementos dos botões Sim e Não
let botaoNao = document.getElementById("nao");
let botaosim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

//Função que move o botão "Não" para uma nova posição
botaoNao.addEventListener("mouseover", function(){ //mouseover move o botão ao chegar perto. click só move ao clicar
    //Move o botão aleatoriamente na tela
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";

    //Exibe a mensagem de erro
    mensagemErro.style.display = "block";
});

// Mantem o botão "Sim" fixo
botaosim.addEventListener("click", function(){
    alert("Ótima escolha! Vamos almoçãr!");
});