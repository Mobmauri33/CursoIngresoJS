function mostrar()
{
    var libro1;
    var precio;
    var tarjeta;
libro1 = prompt("ingrese la cantidad de libros a comprar");
libro1 = parseInt(libro1);
precio = libro1*500
tarjeta = (precio+precio*0.10);
if (libro1>=2) {
alert(precio-precio*0.10);
}
else {
    if (precio>2000 && tarjeta)
    {
        alert (precio-precio*0.15);
    }
    else 
    {
        alert ("se paga con tarjeta " + tarjeta);
    }
    }
}