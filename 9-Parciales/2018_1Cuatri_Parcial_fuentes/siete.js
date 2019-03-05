function mostrar()
{
    var notas;
    var sexo;
    var NotamasBaja=10;
    var sexoDelanotaMasBaja=0
    var sumadenotas=0;
    var CantVarones=0;
    var cont=0;


while(cont<5) {
    cont++

     notas = prompt("Ingrese una nota del 0 al 10");
     notas = parseInt(notas);
     //valido la nota
     while(isNaN(notas))
     {
        notas = prompt("error, ingrese una nota del 0 al 10");
        notas = parseInt(notas);
     }
     //valido que sea una nota entre 0 y 10
     while(notas>10 || notas<0)
     {
        notas = prompt("error, la nota debe ser del 0 al 10");
        notas = parseInt(notas);
     }
     //ingreso sexo
     sexo = prompt("ingrese sexo (f) o (m)");
     //valido que sea f o m
     while(sexo!="m" && sexo!="f")
     {
        sexo = prompt("error, ingrese el sexo correctamente (f) o (m)")
     }
     while(!isNaN(sexo))
     {
        sexo = prompt("error, no ha ingresado un sexo")
     }
     //a)promedio de las notas totales
     sumadenotas=sumadenotas+notas;
     //b)la nota mas baja y el sexo de esa persona
     if(notas<=NotamasBaja&&sexo=="m")
     {
        NotamasBaja=notas
        sexoDelanotaMasBaja="Masculino"
     } else {
        if(notas<=NotamasBaja&&sexo=="f")
        {
           NotamasBaja=notas
           sexoDelanotaMasBaja="Femenino"
        }
     }
     //c)la cantidad de varones que su nota haya sido mayor o igual a 6.
     if(notas>=6&&sexo=="m")
     {
        CantVarones++;
     }
     }
     //resultados
     alert("El promedio de las notas totales es de "+sumadenotas/5+" la nota mas baja es "+NotamasBaja+" y el sexo de esa persona es "+sexoDelanotaMasBaja+" y la cantidad de varones que su nota haya sido mayor o igual a 6 es "+CantVarones);
}
