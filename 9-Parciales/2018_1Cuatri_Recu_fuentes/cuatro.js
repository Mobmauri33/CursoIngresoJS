function mostrar()
{
    var numero1;
    var numero2;
    var suma;
    var division;
numero1 = prompt("ingrese un numero");
numero2 = prompt("ingrese un segundo numero");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
suma = numero1 + numero2;
division = numero1 / numero2;
alert (suma);
if (numero1>numero2) {
alert(division);
}
else {
    if (numero1<numero2 && suma<"50")
    {
        alert (suma);
    }
    else 
    {
        alert ("la suma es " + suma + "y es menor a 50 " );
    }
    }
}