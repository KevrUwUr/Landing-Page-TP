<?php
// Incluir archivo de conexión
include 'conexion.php';

// Aquí puedes hacer consultas a la base de datos usando la variable $pdo
try {
    // Realizar una consulta SELECT de ejemplo
    $sql = "SELECT * FROM tp.empleados_2023";
    $stmt = $pdo->query($sql); // Ejecuta la consulta
    
    // Mostrar los resultados
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " - Nombre: " . $row['nombre'] . "<br>";
    }
} catch (PDOException $e) {
    echo "Error al realizar la consulta: " . $e->getMessage();
}
?>