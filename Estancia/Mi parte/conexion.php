<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

$servidor = "localhost";
$usuario = "raziel6";
$contrasena = "123";
$base_datos = "fugas";

$conexion = new mysqli($servidor, $usuario, $contrasena, $base_datos);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>