let num1;
let num2;
let resultado;

num1 = Number(window.prompt("digte aqui o primeiro numero"));
num2 = Number(window.prompt("digite aqui o segundo numero"));

resultado = num1 + num2;
parouimpar = resultado % 2; 

if(parouimpar == 0) {
     
    alert("o numero" + resultado + "e igual");
} else{
    alert("o numero " + resultado + "e impar")
    
}
