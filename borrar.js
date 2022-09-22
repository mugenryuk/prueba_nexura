/*
Validacion del campo nombre_completo para que solo permita
el ingreso de texto
*/
function SoloText(string){//solo letras
	var out = '';
	//Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ/[^\t\n\r ]/';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
		   out += string.charAt(i);
    return out;
}

/*
Validacion del formulario
*/
function validacion() {
    //setear los datos del formulario
    nombre_completo = document.getElementById("nombre_completo").value;
    correo = document.getElementById("correo").value;
    sexo = document.getElementById("sexo");
    area = document.getElementById("area").selectedIndex;
    descripcion = document.getElementById("descripcion").value;
    rol = document.getElementById("rol").value;
    //Validacion de correo
    const validateEmail = (correo) =>{
    return correo.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    if (!validateEmail(correo)) {
        alert('Ingrese un correo electronico valido');
        return false;
    }
    //Validacion del campo sexo
    var seleccionado = false;
    for(var i=0; i<sexo.length; i++) {
      if(sexo[i].checked) {
        seleccionado = true;
        break;
      }
    } 
    if(seleccionado = false) {
        alert('El campo sexo debe estar diligenciado');
        return false;
    }  
    //Validacion del campo area
    if( area == null || area == 0 ) {
      alert('Seleccione una area valida');
      return false;
    }    
    //Validacion del campo boletin
    var isChecked = document.getElementById('boletin').checked;
    if(!isChecked){
      var boletin = '0';
    }
    //Validacion del campo descripcion
    if( descripcion == null || descripcion.length == 0 || /^\s+$/.test(valor) ) {
        alert('La informacion de la descripción esta vacia');
        return false;
      }    
};

