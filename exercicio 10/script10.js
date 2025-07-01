function contador(){
    let mostraHTML = document.getElementById("mostrahtml");

    let contador = 1;

    while (contador <= 10) {
        mostraHTML.innerHTML += `${contador} &#129323; `;
        contador++;
    }

}