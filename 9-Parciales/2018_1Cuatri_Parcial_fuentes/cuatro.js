function mostrar()
{
    var numero1 = prompt("ingrese un numero");
    var numero2 = prompt("ingrese otro numero");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    var suma;
    var resta;
    suma = numero1+numero2;
    resta = numero1-numero2;

    if (numero1 == numero2)
    {
        alert(numero1+" y "+ numero2+" son iguales");
    }

    if (numero1>numero2)
    {
        alert("El resultado es "+resta);
    }

    if (numero1<numero2)
    {
        alert("El resultado es "+suma);

        if (suma>10)
        {
            alert("La suma es "+suma+" y superó el 10");
        }
    }
}
