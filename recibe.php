<?PHP
require_once 'db.php';
$datos = json_decode(file_get_contents("php://input"));
// Aquí podemos procesar los datos
$nombre_completo = $datos->nombre_completo;
$correo = $datos->correo;
$area = $datos->area;
$sexo = $datos->sexo;
$descripcion = $datos->descripcion;
$boletin = $datos->boletin;
$rol = $datos->rol;
//Validacion del paso de las variable
//file_put_contents("datos.txt", "Nombre: $nombre_completo, Correo: $correo, area: $area, sexo: $sexo, descripcion: $descripcion, boletin: $boletin, rol: $rol\n", FILE_APPEND);
$statement = $link->prepare("INSERT INTO empleado(nombre, email, sexo, area_id, boletin, descripcion)
VALUES (:nombre,:email,:sexo,:area_id,:boletin,:descripcion");

$stmt->bindParam(':nombre', $nombre_completo);
$stmt->bindParam(':email', $correo);
$stmt->bindParam(':sexo', $sexo);
$stmt->bindParam(':area_id', $area);
$stmt->bindParam(':boletin', $boletin);
$stmt->bindParam(':descripcion', $descripcion);
// Excecute
$stmt->execute();
$registros = $db->exec('INSERT INTO empleado(nombre, email, sexo, area_id, boletin, descripcion) VALUES ("$nombre_completo"), ("$correo"), ("$sexo"), ("$area"), ("$boletin"), ("$descripcion")');
if ($registros){
    echo "Se han activado $registros registros.";

           


}
?>