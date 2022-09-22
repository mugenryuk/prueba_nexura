<?php
 $servidor = "localhost";
 $usuario = "root";
 $password = "";

 try {
       $conexion = new PDO("mysql:host=$servidor;dbname=prueba_tecnica_dev", $usuario, $password);      
       $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     }

 catch(PDOException $e)
     {
     echo "La conexión ha fallado: " . $e->getMessage();
     }
?>