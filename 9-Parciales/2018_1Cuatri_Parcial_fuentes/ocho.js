function mostrar()
{
var letra;
var numero;
var respuesta=true;
var bandera=true;
var contpares=0;
var contimpares=0;
var cantceros=0;
var promediopositivos=0;
var sumapositivos=0;
var sumanegativos=0;
var contpositivos=0;
var contnegativos=0;
var nummax;
var nummin;
var letramax;
var letramin;
while(respuesta) {
     //ingreso letra
     letra = prompt("Ingrese una letra");
     letra = parseInt(letra);

     //valido que sea una letra
     while (letra=!isNaN(letra))
     {
        letra = prompt("no ingreso una letra, por favor ingrese una letra");
        letra = parseInt(letra);
     }
     //ingreso numero
     numero = prompt("ingrese un numero entre -100 y 100");
     numero = parseInt(numero);

     //valido que sea un numero y no una letra
     while(isNaN(numero))
     {
        numero = prompt("no es un numero, por favor ingrese un numero");
        numero = parseInt(numero);
     }
     //valido que sea un numero entre -100 y 100
     while(numero>100||numero<-100)
     {
         numero = prompt("no esta entre el -100 y 100, ingrese otro numero");
         numero = parseInt(numero);
     }

     //defino maximo y minimo
    if (bandera)
    {
        nummax = numero;
        nummin = numero;
        letramax = letra;
        letramin = letra;
        bandera=false;
    }
    //a)cantidad de pares
    if (numero%2==0) 
    {
        contpares++;
    }
    //b)cantidad de impares
    else
    {
        contimpares++;
    }
    //e)suma de negativos
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
    //c)cantidad de ceros
    else
    {
        cantceros++;
    }
    //f)numero y letra maxima y minima
    if (numero<nummin)
    {
        nummin = numero;
    }
    if (numero>nummax)
    {
        nummax = numero;
    }
    if (letra<letramin)
    {
        letramin = letra;
    }
    if (letra>letramax)
    {
        letramax = letra;
    }
    //d)promedio de positivos
    promediopositivos= sumapositivos/contpositivos;
    //preguntar si sigo ingresando datos
    respuesta = confirm("¿desea ingresar otra letra y otro número?");
}
    //muestro los resultados por document.write
    document.write("La cantidad de numeros pares es: " + contpares +"<br>");
    document.write("La cantidad de numeros impares es: "+ contimpares +"<br>");
    document.write("La cantidad de ceros es: "+ cantceros +"<br>");
    document.write("El promedio de los numeros positivos ingresados es:" + promediopositivos +"<br>");
    document.write("La suma de todos los numeros negativos es: " + sumanegativos +"<br>");
    document.write("El numero maximo es: " + nummax + " y la letra maxima es: " + letramax +"<br>");
    document.write("El numero minimo es: " + nummin + " y la letra minima es:" + letramin +"<br>");

}




