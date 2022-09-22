<?PHP
require_once 'db.php';
$datos = json_decode(file_get_contents("php://input"));
// Aquí podemos procesar los datos
$nombre_completo = $datos->nombre_completo;
$correo = $datos->correo;
$sexo = $datos->sexo;
$area = $datos->area;
$descripcion = $datos->descripcion;
$rol = $datos->rol;
$boletin = $datos->boletin;

file_put_contents("datos.txt", "Nombre: $nombre_completo, Correo: $correo, sexo: $sexo\n", FILE_APPEND);
echo json_encode("Formulario enviado");
?>