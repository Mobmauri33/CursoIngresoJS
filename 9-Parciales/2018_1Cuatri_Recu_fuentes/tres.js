function mostrar()
{
    var precio;
    var porcentaje;
    var cuenta;
    var precioFinal;
    precio = prompt("Ingrese su precio");
    porcentaje = precio*0.10;
    cuenta = parseInt(precio)+parseInt(porcentaje);
    alert ("La cuenta es " + precio + " + el 10% " + porcentaje + " Entonces el total a pagar de la cuenta es " + cuenta);
}
