/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var marca;
     var precio;
     var descuento;
     var descuento2;
     var descuento3;
     var preciocondesc;
     cantidad = document.getElementById("Cantidad").value;
     cantidad = parseInt(cantidad);
     precio = (cantidad*35);
     marca = document.getElementById("Marca").value;
     preciocondesc = document.getElementById("precioDescuento").value;
     preciocondesc = (precio-descuento);
     descuento = (precio*0.50);
     descuento2 = (precio*0.40);
     descuento3 = (precio*0.30);
     descuento4 = (precio*0.25);
     descuento5 = (precio*0.20);
     if(cantidad>=6) {
          document.getElementById("precioDescuento").value = descuento;
        }
        else
        {
            if (cantidad=5 && marca=="ArgentinaLuz")
            {
                document.getElementById("precioDescuento").value = descuento2;
            }
            else
            {
                document.getElementById("precioDescuento").value = descuento3;
            }

        }
    if(cantidad=4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas") {
        document.getElementById("precioDescuento").value = descuento4;
        }
        else
        {
        document.getElementById("precioDescuento").value = descuento5;
        }
}