function mostrar()
{

  var contador=0;
  var suma=0;
  var acumulador=0;
  var promedio;
  var numero=0;
  contador = prompt("ingrese numero");
  while(contador<6) {
    contador+
    console.log(contador++);
    numero = prompt("ingrese numero");
    numero = parseInt(numero);
    while(isNaN(contador)) {
      numero = prompt("ingrese numero");
      numero = parseInt(numero);
    }
    acumulador = contador+numero;
    acumulador += numero;
    }
    promedio=acumulador/contador;
    document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/5;
    }



//FIN DE LA FUNCIÓN
