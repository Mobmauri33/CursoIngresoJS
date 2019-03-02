function mostrar()
{
var letra;
var numero;
var respuesta=true;
var bandera=true;
var contpares=0;
var contimpares=0;
var cantceros=0;
var promediopositivos;
var sumapositivos=0;
var sumanegativos;
var contpositivos=0;
var contnegativos=0;
var nummax;
var nummin;
var letramax;
var letramin;
while(respuesta) {
    letra = prompt("Ingrese una letra");
    numero = prompt("ingrese un numero entre -100 y 100");
    numero = parseInt(numero);
    if (numero%2==0) 
    {
        contpares++;
    }
    else
    {
        contimpares++;
    }
    if (numero<0)
    {
        sumanegativos+= numero;
        contnegativos++;
    }
    else if (numero>0)
    {
        sumapositivos+= numero;
        contpositivos++;
    }
    else
    {
        cantceros++;
    }
    if (bandera)
    {
        bandera=false;
        nummax = numero;
        nummin = numero;
    }
}
}
promediopositivos= sumapositivos/contpositivos;
respuesta = confirm("¿desea ingresar otra letra y otro número?")


document.write("La cantidad de numeros pares es " + contpares);