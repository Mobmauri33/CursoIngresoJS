function mostrar()
{
var marca;
var peso;
var temperatura;
var respuesta=true;
var bandera=true;
var cantTempPares=0;
var CantProdbajocero=0;
var promediodepesos=0;
var sumaDePesos=0;
var contPesos=0;
var marcamax;
var pesomax;
var pesomin;
while(respuesta) {
     //ingreso marca
     marca = prompt("ingrese la marca del producto");
     //valido que sea una marca
     while (!isNaN(marca))
     {
         marca = prompt("esa no es una marca, ingresa una marca");
         marca = parseInt(marca);
     }
     //ingreso el peso
     peso = prompt("ingrese el peso del producto entre 1 y 100");
     peso = parseInt(peso);
     //valido que sea un numero y no una letra
     while(isNaN(peso))
     {
         peso = prompt("no ha ingresado un peso, ingrese un peso");
         peso = parseInt(peso);
     }
     //valido que sea un numero entre 1 y 100
     while(peso>100 || peso<1)
     {
         peso = prompt("no esta entre el 1 y 100, ingrese otro peso");
         peso = parseInt(peso);
     }
     //ingreso la temperatura
     temperatura = prompt("ingrese la temperatura de almacenamiento entre -30 y 30");
     temperatura = parseInt(temperatura);
     //valido que sea un numero y no una letra
     while(isNaN(temperatura))
     {
         temperatura = prompt("no ha ingresado una temperatura, ingrese una temperatura");
         temperatura = parseInt(temperatura);
     }
     //valido que sea un numero entre -30 y 30
     while(temperatura>30 || temperatura<-30)
     {
         temperatura = prompt("no esta entre -30 y 30, ingrese otra temperatura");
         temperatura = parseInt(temperatura);
     }
     //defino maximo y minimo
     if(bandera)
     {
         pesomax = peso;
         pesomin = peso;
         marcamax = marca;
         bandera=false;
     }
     //a)cantidad de temperaturas pares
     if(temperatura%2==0)
     {
         cantTempPares++;
     }
     //b)marca del producto mas pesado
     if(marca>marcamax)
     {
         marcamax = marca;
     }
     //c)cantidad de productos que se conservan -0 grados
     if(temperatura<0)
     {
         CantProdbajocero++;
     }
     //d)promedio de peso de todos los productos
     if(peso>0)
     {
         sumaDePesos+= peso;
         contPesos++;
     }
     promediodepesos= sumaDePesos/contPesos;
     //f)El peso maximo y minimo
     if(peso<pesomin)
     {
         pesomin = peso;
     }
     if(peso>pesomax)
     {
         pesomax = peso;
     }
     //pregunto si sigo ingresando datos
respuesta= confirm("¿quiere ingresar los datos de otro producto?");    
}
//muestro los resultados por document.write
document.write("La cantidad de temperaturas pares es: " + cantTempPares+"<br>");
document.write("La marca del producto mas pesado es: " + marcamax+"<br>");
document.write("La cantidad de productos que se conservan a menos de 0 grados es: " + CantProdbajocero+"<br>");
document.write("El promedio de todos los pesos de los productos es: " + promediodepesos+"<br>");
document.write("El peso maximo es: " + pesomax + " y el peso minimo es: " + pesomin+"<br>");
}

