function mostrar()
{

  var contador=0;
  var max=10;
  var min=0;
  var bandera=true;
  var num;
   while((confirm)) {
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
  }




}//FIN DE LA FUNCIÓN
