function mostrar()
{
var planeta = prompt("Ingrese el Nombre del planeta");
switch(planeta) {
    case "tierra":
    alert("acá vivimos");
    break;
    case "mercurio":
    case "venus":
    alert("acá hace más calor");
    break;
    case "marte":
    case "neptuno":
    case "jupiter":
    case "urano":
    case "pluton":
    alert("acá hace más frio");
    break;
    default:
    alert("ese no es un planeta");
}
}
