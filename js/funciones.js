function validar(){
	var expresion;
	var marce=document.formu;
     

	if (marce.nombres.value==""){
		alert("ingrese nombre porfavor");
		formu.nombre.value="";//que el campo quede vacio una vez que se envie
		formu.nombre.focus();//que el cursor se mantenga en el campo (focus)
		return false;



		
	}



	if(marce.correos.value==""){
			alert("ingrese  tu email porfavor")
			formu.correo.value="";
			formu.correo.focus();
			return false;
	}

	if (validarEmail(formu.correo.value)==false){
			alert("correo no valido")
			formu.correo.value="";
			formu.correo.focus();
			return false;
		}
	





	if(marce.asunto.value==""){
			alert("ingrese asunto porfavor")
			formu.asunto.value="";
			formu.asunto.focus();
	
			return false;

		}


	formu.submit();



	function validarEmail(correo) {
  		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)){
   		return true;
   	}else{
   		return false;
   	}




}







}