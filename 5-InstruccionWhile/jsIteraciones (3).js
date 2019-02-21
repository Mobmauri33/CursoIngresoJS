function mostrar()
{
 var cont=0
 var clave = prompt("ingrese el número clave.");
 while(clave !="utn750") {
    clave = prompt("ingrese el número de clave.");
 break;
 }
 while(cont<2) {
    cont++
    console.log(cont++);
    clave= prompt("ingrese el número de clave.");
    alert("ingresó mal su clave tres veces, vuelva a intentarlo");
 }
 }
//FIN DE LA FUNCIÓN
