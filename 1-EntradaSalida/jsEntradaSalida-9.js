/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero1;
    var numero2;
    var rEsultado;
    numero1 = document.getElementById("sueldo").value;
    numero2 = document.getElementById("resultado").value;
    rEsultado = parseInt(numero1)+parseInt(numero1)*0.10;
    alert (rEsultado);
	
}
