function mostrar()
{
var precio;
var porcentajededesc;
var cuenta;
var precioFinal;
precio = prompt("Ingrese su precio");
porcentajededesc = prompt("Ingrese el porcentaje de descuento a calcular");
cuenta = parseInt(precio)*parseInt(porcentajededesc) / 100;
precioFinal = (precio)-(cuenta);
document.getElementById("elPrecioFinal").value = precioFinal;
}
