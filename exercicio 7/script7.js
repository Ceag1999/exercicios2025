let mostraHTML = document.getElementById("mostraHTML");

let numero = 0;

function aleatorio(){

      numero = parseInt(Math.random() * 101);
     
      mostraHTML.innerHTML += `<p> pensei no numero: ${numero}!</p>`;
}

function zerar(){
    numero = 0;
    mostraHTML.innerHTML = `<p> resetei os numero:  ${numero}</p>`;
}