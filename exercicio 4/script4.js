let inscritos = 0;
let equipes = 0;

function calcular(){
    inscritos +=1;
    equipes = parseInt (inscritos / 3);
    alert("número de inscritos: " + inscritos + ". equipes: " + equipes )
}
 if(equipes >= 4) {
    alert("numero de incritos: " + inscritos + "numero de equipes: " + equipes)
 }