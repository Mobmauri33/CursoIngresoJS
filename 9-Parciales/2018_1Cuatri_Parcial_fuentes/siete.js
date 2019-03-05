function mostrar()
{
    var notas;
    var sexo;
    var promedioNotasTotales;
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
     }
}

