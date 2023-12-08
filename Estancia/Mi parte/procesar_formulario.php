<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $diametro = $_POST["diametro"];
    $grosor = $_POST["grosor"];
    $material = $_POST["material"];
    $densidad = $_POST["densidad"];
    $profundidad = $_POST["profundidad"];
    $ubicacion = $_POST["ubicacion"];

    // Realiza la inserción en la tabla 'usuarios'
    $sql = "INSERT INTO tuberia (Id, Diametro, Grosor, Material, Densidad, Profundidad, Ubicacion) 
    VALUES ('$id', '$diametro', '$grosor', '$material', '$densidad', '$profundidad', '$ubicacion')";

    if ($conexion->query($sql) === TRUE) {
        echo "Registro insertado correctamente.";
    } else {
        echo "Error al insertar el registro: " . $conexion->error;
    }

    $conexion->close();
}
?>
