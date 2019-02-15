function mostrar()
{
    var precio;
    var propina;
    var cuenta;
    var precioFinal;
    precio = prompt("Ingrese su precio");
    propina = precio*0.10;
    cuenta = parseInt(precio)+parseInt(propina);
    alert ("La cuenta es " + precio + " + el 10% de propina " + propina + " Entonces el total a pagar de la cuenta es " + cuenta);
}
