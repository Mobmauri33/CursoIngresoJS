/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numero1;
var numero2;
var rEsultado;
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
rEsultado = parseInt(numero1)+parseInt(numero2);
alert (rEsultado);
}

