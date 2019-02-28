function mostrar()
{
var contpar=0;
var impar;
var numero = prompt ("ingresa un número");
numero = parseInt(numero);
for ( var i=1;i<=numero ; i++ ){
    if (i%2==0) {
        console.log(i);
        contpar++;
    }
}




}//FIN DE LA FUNCIÓN