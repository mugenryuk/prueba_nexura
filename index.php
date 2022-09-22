<?php
   require_once 'db.php';
   ?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Prueba DESARROLLADOR PHP</title>
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   </head>
   <body>
      <main class="container">
         <div class="bg-light p-5 rounded">
            <h1>Crear empleado</h1>
            <div class="alert alert-primary" role="alert">
               Los campos son asteriscos (*) son obligatorios
            </div>
            <form action="" method="" onsubmit="validacion()" id="formdata">
               <div class="form-group row">
                  <label for="nombre_completo" class="col-md-2 col-form-label">Nombre completo *</label>
                  <div class="col-md-8">
                     <input type="text" id="nombre_completo" onkeyup="this.value=SoloText(this.value)" class="form-control" name="nombre_completo" placeholder="Nombre completo del empleado" required autofocus>
                  </div>
               </div>
               <div class="form-group row">
                  <label for="correo" class="col-md-2 col-form-label">Correo electronico *</label>
                  <div class="col-md-8">
                     <input type="email" id="correo" class="form-control" name="correo" placeholder="Correo electrónico" required>
                  </div>
               </div>
               <div class="form-group row">
                  <label for="correo" class="col-md-2 col-form-label">Sexo *</label>
                  <div class="col-md-8">
                     <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexo" id="sexo" value="M" checked required>
                        <label class="form-check-label" for="sexo">
                        Masculino
                        </label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexo" id="sexo" value="F">
                        <label class="form-check-label" for="sexo">
                        Femenino
                        </label>
                     </div>
                  </div>
               </div>
               <div class="form-group row">
                  <label for="correo" class="col-md-2 col-form-label">Area *</label>
                  <div class="col-md-8">
                     <select class="form-control" id="area" name="area" required>
                     <option value="">- Selecciona un area -</option>
                     <?php
                        //Se realiza la consulta
                        $query = $conexion->prepare("SELECT * FROM areas");
                        $query->execute();
                        $data = $query->fetchAll();
                        //Se llenan los option segun la informacion de la BD
                        foreach ($data as $valores):
                           echo '<option value="'.$valores["id"].'">'.$valores["nombre"].'</option>';
                           endforeach;
                        ?>
                     </select>
                  </div>
               </div>
               <div class="form-group row">
                  <label for="correo" class="col-md-2 col-form-label">Descripción *</label>
                  <div class="col-md-8">
                     <textarea class="form-control" id="descripcion" name="descripcion" rows="3" placeholder="Descripción de la emperiencia del empleado"></textarea>
                  </div>
               </div>
               <div class="form-group row">
                  <label for="correo" class="col-md-2 col-form-label">Roles *</label>
                  <div class="col-md-8">
                     <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="boletin[]" id="boletin" value="1">
                        <label class="form-check-label" for="boletin">Deseo recibir boletín onfirmativo</label>
                     </div>
                     <br>
                     <?php
                        //Se realiza la consulta
                        $query_rol = $conexion->prepare("SELECT * FROM roles");
                        $query_rol->execute();
                        $data_rol = $query_rol->fetchAll();
                        //Se llenan los checkbox segun la informacion de la BD
                        foreach ($data_rol as $valores_rol):
                           echo'<div class="form-check form-check-inline">';
                           echo'<input class="form-check-input" type="radio" name="rol" id="rol" value="'.$valores_rol["id"].'">';
                           echo'<label class="form-check-label" for="rol">'.$valores_rol["nombre"].'</label>';
                           echo'</div>';
                        endforeach;
                        ?>
                  </div>
               </div>


               <div id="respuesta">

</div>

               <div class="col-md-6 offset-md-2">
                  <button type="submit" id="btnEnviar" class="btn btn-primary">
                  Guardar
                  </button>
               </div>
         </div>
         </form>
         </div>
      </main>
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>
      <script src="validador.js"></script>
   </body>
</html>