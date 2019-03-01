function mostrar()
{
var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
var resultado1;
var resultado2;
var resultado3;
resultado1 = (numero1 - numero2);
resultado2 = (numero1 + numero2);
resultado3 = (numero1 + numero2>10);
if (numero1==numero2) {alert("El resultado es " + numero1 + " y " + numero2 + " son iguales ")}
if (numero1>numero2) {alert("El resultado es " + resultado1)}
if (numero1<numero2) {alert("El resultado es " + resultado2)}
}
