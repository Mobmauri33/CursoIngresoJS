function mostrar()
{
var cont=0;
var numero;
numero = prompt("ingrese numero");
for (var i=2; i<numero/2; i++) {
    if(numero%i==0) {
        cont++
    if(cont>2){
        alert("no es primo");
    }
}
}


}//FIN DE LA FUNCIÓN