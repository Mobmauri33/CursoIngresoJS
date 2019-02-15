function mostrar()
{
    var nombre;
    var localidad;
    var rEsultado;
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;
    rEsultado = (("usted es " +  nombre) +  (" y vive en la localidad de "  +  localidad));
    alert (rEsultado);
}
