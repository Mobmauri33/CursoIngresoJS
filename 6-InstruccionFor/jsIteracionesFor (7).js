function mostrar()
{
    var cont=0;
    var numero;
    numero = prompt("ingrese numero");
    numero = parseInt(numero);
    for (var i=1; i<=numero ; i++) {
        if(numero%i==0) {
            cont++
            console.log(i);
        }
    }
}