function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var resultadorandom;
	resultadorandom = Math.round(Math.random()*10);
	alert ("El numero random entre 1 y 10 es: " + resultadorandom);
	if(resultadorandom <=10 && resultadorandom >=9 ){
		alert ("EXCELENTE");
	}
	if(resultadorandom >=4 && resultadorandom <9){
		alert ("APROBO");
	}
	if(resultadorandom <4 ){
		alert ("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN