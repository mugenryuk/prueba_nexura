function SoloText(string){//solo letras
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ/[^\t\n\r ]/';//Caracteres validos
    for (var i=0; i<string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1) 
    out += string.charAt(i);
    return out;
    }
    const 
    $nombre_completo = document.querySelector("#nombre_completo"), // los 3 input
    $correo = document.querySelector("#correo"),
    $sexo = document.querySelector("#sexo"),
    $area = document.querySelector("#area"),
    $descripcion = document.querySelector("#descripcion"),
    $boletin = document.querySelector("#boletin"),
    $rol = document.querySelector("#rol"),                    
    $btnEnviar = document.querySelector("#btnEnviar"), // El botón que envía el formulario
    $respuesta = document.querySelector("#respuesta"); // el div que muestra mensajes
    // Agregar listener al botón
    $btnEnviar.addEventListener("click", () => {
    valor_correo = document.getElementById("correo").value;
    valor_sexo = document.getElementById("sexo");
    valor_area = document.getElementById("area").selectedIndex;
    valor_descripcion = document.getElementById("descripcion").value;
    valor_boletin = document.getElementById("boletin").value;
    valor_rol = document.getElementById("rol").value;
    //Validacion de correo
    const validateEmail = (valor_correo) =>{
    return valor_correo.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    };
    if (!validateEmail(valor_correo)) {
    alert('Ingrese un correo electronico valido');
    return false;
    }
    //Validacion del campo sexo
    var seleccionado = false;
    for(var i=0; i<valor_sexo.length; i++) {
    if(valor_sexo[i].checked) {
    seleccionado = true;
    break;
    }
    } 
    if(seleccionado = false) {
    alert('El campo sexo debe estar diligenciado');
    return false;
    } 
    //Validacion del campo area
    if( valor_area == null || valor_area == 0 ) {
    alert('Seleccione una area valida');
    return false;
    }    
    //Validacion del campo boletin
    var isChecked = document.getElementById('boletin').checked;
    if(!isChecked){
        $boletin.value = '0';
    }    
    // Poner un estado de "enviando"
    $respuesta.textContent = "Cargando...";
    // Armar objeto con datos
    const datos = {
    nombre_completo: $nombre_completo.value,
    correo: $correo.value,
    area: $area.value,
    sexo: $sexo.value,
    descripcion: $descripcion.value,
    boletin: $boletin.value,
    rol: $rol.value,                    
    };
    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./recibe.php", {
    method: "POST", // Enviar por POST
    body: datosCodificados, // En el cuerpo van los datos
    })
    .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
    .then(respuestaDecodificada => {
    // Aquí ya tenemos la respuesta lista para ser procesada
    $respuesta.textContent = respuestaDecodificada;
    });
    });