<?php
// Cargar el archivo .env
require_once __DIR__ . '/../../../vendor/autoload.php';

use Dotenv\Dotenv;

// Cargar las variables de entorno desde el archivo .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Obtener los datos de conexión desde las variables de entorno
$host = $_ENV['DB_HOST'];
$dbname = $_ENV['DB_NAME'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];

try {
  // Crear la conexión PDO
  $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
  $pdo = new PDO($dsn, $username, $password);

  // Establecer el modo de error de PDO a excepción
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  echo "Conexión exitosa a la base de datos.";
} catch (PDOException $e) {
  echo "Error de conexión: " . $e->getMessage();
}
?>
