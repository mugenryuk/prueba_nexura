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


const   $nombre_completo = document.querySelector("#nombre_completo"), // los 3 input
        $correo = document.querySelector("#correo"),
        $sexo = document.querySelector("#sexo"),
        $area = document.querySelector("#area"),
        $descripcion = document.querySelector("#descripcion"),
        $rol = document.querySelector("#edad"),
        $boletin = document.querySelector("#boletin"),
        $btnEnviar = document.querySelector("#btnEnviar"), // El botón que envía el formulario
        $respuesta = document.querySelector("#respuesta"); // el div que muestra mensajes
        var isChecked = $boletin.checked;
        if(!isChecked){
          $boletin == '0';
        }
// Agregar listener al botón
$btnEnviar.addEventListener("click", () => {
    // Poner un estado de "enviando"
    $respuesta.textContent = "Cargando...";
    // Armar objeto con datos
    const datos = {
        nombre_completo : $nombre_completo.value,
        correo : $correo.value,
        sexo : $sexo.value,
        area : $area.value,
        descripcion : $descripcion.value,
        rol : $rol.value,
        boletin : $boletin.value,
    };
    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./recibe.php", {
            method: "GET", // Enviar por POST
            body: datosCodificados, // En el cuerpo van los datos
        })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            $respuesta.textContent = respuestaDecodificada;
        });
});