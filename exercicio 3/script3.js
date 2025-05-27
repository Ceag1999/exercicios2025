var nota1;
var nota2;
var nota3;
let total;

function somar(){
    alert("")
  num1 = Number(window.prompt("digte aqui o primeiro numero"));
  num2 = Number(window.prompt("digite aqui o segundo numero"));
  num3 = Number(window.prompt("digte aqui o terceiro numero"));
 

let total = (nota1 + nota2 + nota3)/3;

 alert("a media final: " + total );

 if( total>= 60){

    alert("voce atingiu a media" + media + total);
    alert("aprovado");
 } else{
    pontosfaltando = 60 - total
    alert("reprovado faltarem " + pontosfaltando + "os pontos ");
    alert("o numero " + total + "reprovado");
 }
  
}