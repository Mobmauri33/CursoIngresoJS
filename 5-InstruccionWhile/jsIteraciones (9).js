function mostrar()
{

  var respuesta=true;
  var max=10;
  var min=0;
  var bandera=true;
  var num;
   while(respuesta) {
     do{
      num=prompt("le pido numeros");
      num=parseInt(num);
     } while(isNaN(num));
     if(bandera) {
      bandera = false;
     max = num;
      min = num;
     } else {
     if(num>max) {
      max = num;
     }
     if(num<min) {
      min = num;
    }
    respuesta=confirm("quiere agregar mas numeros?");
  }




}//FIN DE LA FUNCIÓN
