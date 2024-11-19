CREATE DATABASE TP_Example;

CREATE TABLE `tp.ciudades` (
    `ID_CIUDAD` INT NOT NULL AUTO_INCREMENT,
    `NOMBRE_CIUDAD` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`ID_CIUDAD`)
) ENGINE = InnoDB;

CREATE TABLE `tp.areas` (
    `ID_AREA` INT NOT NULL AUTO_INCREMENT,
    `NOMBRE_AREA` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`ID_AREA`)
) ENGINE = InnoDB;

CREATE TABLE `tp.empleados_2023` (
    `ID_EMPLEADO` INT NOT NULL AUTO_INCREMENT,
    `NOMBRE` VARCHAR(150) NOT NULL,
    `DOCUMENTO` INT NULL,
    `CORREO` VARCHAR(255) NOT NULL,
    `ID_CIUDAD` INT NULL,
    `ID_AREA` INT NULL,
    PRIMARY KEY (`ID_EMPLEADO`),
    FOREIGN KEY (`ID_CIUDAD`) 
        REFERENCES `tp.ciudades` (`ID_CIUDAD`)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    FOREIGN KEY (`ID_AREA`) 
        REFERENCES `tp.areas` (`ID_AREA`)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE = InnoDB;

INSERT INTO `tp_example`.`tp.ciudades` (`NOMBRE_CIUDAD`)
VALUES ('Bogotá'), ('Medellín'), ('Cali');

INSERT INTO `tp_example`.`tp.areas` (`NOMBRE_AREA`)
VALUES ('Recursos Humanos'), ('Desarrollo'), ('Marketing'), ('Ventas');

INSERT INTO `tp_example`.`tp.empleados_2023` (`NOMBRE`, `DOCUMENTO`, `CORREO`, `ID_CIUDAD`, `ID_AREA`)
VALUES 
('Kevin Marin', 123456789, 'kevin.marin@gmail.com', 1, 2),
('Camila Beltran', 987654321, 'camila.beltran@gmail.com', 2, 1),
('Julian Bustillo', 123987456, 'julian.bustillo@gmail.com', 3, 1);
