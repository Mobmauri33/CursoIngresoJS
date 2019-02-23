function mostrar()
{

  var contador=0;
  var num=0;
  var sumaNeg=0
  var contneg=0
  var sumapos=0
  var cantpos=0
  var cantneg=0
  var contceros=0
  var contpar=0
   do{
     do{
      num=prompt("ingrese numero");
      num=parseInt(num);
     } while(isNaN(num));
       if(num<0) {
       sumaNeg+=num;
       contneg++;
       } else {
        if(num>0) {
        sumapos+=num;
        cantpos++;
       } else {
        contceros++
       }
         if(num%2==0) {
         contpar++;
         }
         var respuesta=confirm();

	      while(respuesta)
         respuesta=confirm();
         }
          }




        } //FIN DE LA FUNCIÓN
