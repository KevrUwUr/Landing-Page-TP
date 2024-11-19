<?php
include '../Config/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validar que existan los campos obligatorios
    if (isset($_POST['firstName'], $_POST['lastName'], $_POST['email'])) {
        // Limpiar y validar el nombre y apellido
        $firstName = trim($_POST['firstName']);
        $lastName = trim($_POST['lastName']);
        if (empty($firstName) || empty($lastName)) {
            die("El nombre y el apellido son obligatorios.");
        }

        // Concatenar nombre completo
        $nombre = $firstName . ' ' . $lastName;

        // Validar y limpiar el correo
        $correo = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
        if (!$correo) {
            die("El correo proporcionado no es válido.");
        }

        // Preparar los datos para la función
        $body = [
            'nombre' => $nombre,
            'correo' => $correo,
        ];

        // Llamar a la función para crear el empleado
        createEmployee($body);
    } else {
        echo "Faltan datos obligatorios.";
    }
}

// Función para crear un nuevo empleado
function createEmployee($body)
{
    global $pdo; // Asegurar acceso a la conexión PDO

    try {
        // Preparar la consulta SQL
        $sql = "INSERT INTO `tp.empleados_2023` (NOMBRE, CORREO) 
                VALUES (:nombre, :correo)";
        
        // Preparar la sentencia
        $stmt = $pdo->prepare($sql);

        // Asignar los valores del cuerpo
        $stmt->bindParam(':nombre', $body['nombre']);
        $stmt->bindParam(':correo', $body['correo']);

        // Ejecutar la consulta
        $stmt->execute();

        echo "Empleado creado exitosamente.";
    } catch (PDOException $e) {
        echo "Error al realizar la consulta: " . $e->getMessage();
    }
}
