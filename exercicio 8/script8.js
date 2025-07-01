let mostraHTML = document.getElementById("mostrahtml");
let numero = 0
let num_adiv = 0

numero = parseInt(Math.random() * 101);

function adiv(){
    let frase

    num_adiv = Number(window.prompt("digite um numero de 1 a 100"));

    frase = mostraHTML.innerHTML += `<p> voce escolheu ${num_adiv}.</p>`

    if(num_adiv > numero){
        mostraHTML.innerHTML = `<p> voce escolheu ${num_adiv}. meu numero é MENOR </p>`
    }else{
        mostraHTML.innerHTML = `<p> voce escolheu ${num_adiv}. meu numero é MAIOR </p>`  
    }
    if (num_adiv == numero){
        mostraHTML.innerHTML = `<p> parabens voce ganhou! </p>`
    }
}