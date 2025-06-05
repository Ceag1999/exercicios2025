let pontosfaltando;
var nome = window.prompt ("qual é seu nome?")
var nota1 = Number(window.prompt("digte aqui a primeira nota"));
var nota2 = Number(window.prompt("digite aqui a segunda nota"));
var nota3 = Number(window.prompt("digite aqui a terceira nota"));


let total = (nota1 + nota2 + nota3) / 3;

 alert(nome + ", sua media final é " + total );

 if( total>= 6.0){

    alert(" parabens! " + nome + " voce atingiu a media com " + total);
    alert("aprovado");
 } else{
    pontosfaltando = 60 - total
    alert("reprovado, " + nome + ". faltaram " + pontosfaltando + " pontos.");
    alert("o numero " + total + "reprovado");

    alert(" da uma olhada nesses cursos: https://www.alura.com.br");
 }
  
