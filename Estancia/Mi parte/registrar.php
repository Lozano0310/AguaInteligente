<?php

$servidor = "localhost";
$usuario = "raziel6";
$contrasena = "123";
$base_datos = "fugas";

$id = $_POST["id"];
$diametro = $_POST["Diametro"];
$grosor = $_POST["Grosor"];
$material = $_POST["Material"];
$densidad = $_POST["Densidad"];
$profundidad = $_POST["Profundidad"];
$ubicacion = $_POST["Ubicacion"];

$conexion = new mysqli($servidor, $usuario, $contrasena, $base_datos);

$sql = "INSERT INTO tuberia (Id, Diametro, Grosor, Material, Densidad, Profundidad, Ubicacion) 
    VALUES ('$id', '$diametro', '$grosor', '$material', '$densidad', '$profundidad', '$ubicacion')";
	 
if ($conexion->query($sql) === TRUE) {
        echo "Registro insertado correctamente.";
}
?>
	