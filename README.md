# Prueba Técnica - Proyecto TP

Este repositorio contiene la solución de la prueba técnica solicitada, con la implementación de una Landing Page. A continuación, se describen los pasos para implementar y ejecutar el proyecto en tu entorno local.

## Índice

1. [Instrucciones Generales](#instrucciones-generales)
1. [Paso 1 - Base de Datos](#paso-1-base-de-datos)
1. [Paso 2 - Interfaces](#paso-2-interfaces)
1. [Paso 3 - Configuración en Entorno Local](#paso-3-configuración-en-entorno-local)

## Instrucciones Generales

A continuación, se describen los pasos para la correcta implementación de la prueba técnica en tu entorno local.

### Paso 1 - Base de Datos

La base de datos necesaria para el proyecto se encuentra dentro de la carpeta `BD`.

1. Dirígete a la carpeta `BD` en el repositorio y encuentra el archivo SQL.
1. Importa el archivo en tu motor de bases de datos (MySQL, por ejemplo) con el nombre `tp\_example`.

### Paso 2 - Interfaces

En la carpeta `Interfaces`, se encuentran los archivos necesarios para la parte visual del proyecto. Estos incluyen HTML, CSS y JavaScript necesarios para la Landing Page.

1. Dirígete a la carpeta `Interfaces` y revisa los archivos que conforman la interfaz.
1. Puedes modificar la apariencia o el contenido si es necesario, según los requerimientos del proyecto.

### Paso 3 - Configuración en Entorno Local

Para poder ejecutar el proyecto de manera local, sigue los pasos a continuación:

#### Paso 3.1: Instalar dependencias de Composer

1. Abre una terminal en la carpeta `PHP` que se encuentra en el repositorio.
1. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash

composer install
```
Esto descargará todas las dependencias necesarias para ejecutar la parte de PHP del proyecto.

#### Paso 3.2: Importar la Base de Datos

Dirígete al motor de bases de datos (como XAMPP, WAMP, o el motor de bases de datos que estés utilizando).

Importa la base de datos incluida en la carpeta BD en el paso 1, con el nombre tp\_example.

#### Paso 3.3: Configurar el entorno local

Coloca la carpeta extraída del repositorio en el directorio raíz de tu servidor local (por ejemplo, en htdocs si usas XAMPP).

Ejemplo: Si usas XAMPP, mueve la carpeta a C:\xampp\htdocs.

Abre tu navegador y accede a la siguiente URL, ajustando el puerto de tu servidor local (por ejemplo, si usas el puerto 80, no será necesario especificarlo en la URL):

```bash

http://localhost:(Puerto del entorno local)/Landing-Page-TP/Public/
```
Asegúrate de reemplazar (Puerto del entorno local) con el puerto adecuado si estás utilizando algo diferente al puerto por defecto (80).
