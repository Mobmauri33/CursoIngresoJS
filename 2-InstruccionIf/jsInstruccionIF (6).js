function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
if (edad>17) {
    alert ("sos mayor de edad"); 
}
    else {
        if (edad<=17 && edad>=13) 
    {
        alert ("sos un adolescente");
    }
    else
    {
        alert ("sos un niño");
    }
    }

}//FIN DE LA FUNCIÓN