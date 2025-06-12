let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML"); 

function contador(){

    cliques++;

    mostraHTML.innerHTML = `<p> numero de cliques: ${cliques}</p>`;
}

function zerar(){
    cliques = 0;
    mostraHTML.innerHTML = `<p> numero de cliques: ${cliques}</p>`;
}
