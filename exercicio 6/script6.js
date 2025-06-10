let clique = 0;
let mostraHTML = document.getElementById("mostraHTML"); 

function contador() {

    cliques++;

    mostraHTML.innerHTML = `<p> numero de cliques: ${cliques} </p>`;
}