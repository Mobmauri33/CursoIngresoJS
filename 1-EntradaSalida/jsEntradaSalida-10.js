/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numero1;
    var numero2;
    var rEsultado;
    numero1 = document.getElementById("importe").Value;
    numero2 = document.getElementById("resultado").Value;
    rEsultado = parseInt(numero1)-parseInt(numero1)*0.25;
    alert (rEsultado);
}
