/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var radio;
var perimetro;
var suma;
var cantalambre;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;
radio = document.getElementById("Radio").value;

largo = parseInt(largo);
ancho = parseInt(ancho);
radio = parseInt(radio);
suma = (largo)+(ancho);
perimetro = suma *2;
cantalambre = (perimetro /3);
alert ("se necesita 3 alambres de " + cantalambre);

}
function Circulo () 
{
    var radio;
    var diametro;
    var alambres2;
    var perimetroCirc;
    radio = document.getElementById("Radio").value;
    diametro = parseInt(radio)*2;
    perimetroCirc = diametro*3.14;
    alambres2 = (perimetroCirc /3);
    alert ("se necesita 3 alambres de " + alambres2 );


}
function Materiales () 
{
	
}