CREATE DATABASE c_program;
use c_program;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for actividades
-- ----------------------------
DROP TABLE IF EXISTS actividades;
CREATE TABLE actividades  (
  id bigint NOT NULL AUTO_INCREMENT,
  subtema_id bigint NULL DEFAULT NULL,
  tipo enum('video','ejercicio','examen')  NULL DEFAULT NULL,
  contenido text  NULL,
  PRIMARY KEY (id) USING BTREE,
  INDEX idx_actividades_subtema_id(subtema_id ASC) USING BTREE,
  CONSTRAINT actividades_ibfk_1 FOREIGN KEY (subtema_id) REFERENCES subtemas (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of actividades
-- ----------------------------

-- ----------------------------
-- Table structure for calendario
-- ----------------------------
DROP TABLE IF EXISTS calendario;
CREATE TABLE calendario (
  id bigint NOT NULL AUTO_INCREMENT,
  curso_id bigint NULL DEFAULT NULL,
  fecha_inicio timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_fin timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  fecha_entrega timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  CONSTRAINT calendario_ibfk_1 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of calendario
-- ----------------------------

-- ----------------------------
-- Table structure for certificados
-- ----------------------------
DROP TABLE IF EXISTS certificados;
CREATE TABLE certificados  (
  id bigint NOT NULL AUTO_INCREMENT,
  usuario_id bigint NULL DEFAULT NULL,
  curso_id bigint NULL DEFAULT NULL,
  fecha_emision timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) USING BTREE,
  INDEX usuario_id(usuario_id ASC) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  CONSTRAINT certificados_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT certificados_ibfk_2 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of certificados
-- ----------------------------

-- ----------------------------
-- Table structure for comentarios
-- ----------------------------
DROP TABLE IF EXISTS comentarios;
CREATE TABLE comentarios  (
  id bigint NOT NULL AUTO_INCREMENT,
  usuario_id bigint NULL DEFAULT NULL,
  curso_id bigint NULL DEFAULT NULL,
  comentario text  NULL,
  calificacion tinyint NULL DEFAULT NULL,
  fecha timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) USING BTREE,
  INDEX usuario_id(usuario_id ASC) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  CONSTRAINT comentarios_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT comentarios_ibfk_2 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT comentarios_chk_1 CHECK (calificacion between 1 and 5)
) ;

-- ----------------------------
-- Records of comentarios
-- ----------------------------

-- ----------------------------
-- Table structure for cursos
-- ----------------------------
DROP TABLE IF EXISTS cursos;
CREATE TABLE cursos  (
  id bigint NOT NULL AUTO_INCREMENT,
  titulo varchar(255) NOT NULL,
  descripcion text  NULL,
  version int NULL DEFAULT 1,
  fecha_creacion timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) USING BTREE
) ;

-- ----------------------------
-- Records of cursos
-- ----------------------------

-- ----------------------------
-- Table structure for ejercicios
-- ----------------------------
DROP TABLE IF EXISTS ejercicios;
CREATE TABLE ejercicios  (
  id bigint NOT NULL AUTO_INCREMENT,
  actividad_id bigint NULL DEFAULT NULL,
  pregunta text  NOT NULL,
  respuesta_correcta text  NOT NULL,
  PRIMARY KEY (id) USING BTREE,
  INDEX actividad_id(actividad_id ASC) USING BTREE,
  CONSTRAINT ejercicios_ibfk_1 FOREIGN KEY (actividad_id) REFERENCES actividades (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of ejercicios
-- ----------------------------

-- ----------------------------
-- Table structure for examenes
-- ----------------------------
DROP TABLE IF EXISTS examenes;
CREATE TABLE examenes  (
  id bigint NOT NULL AUTO_INCREMENT,
  actividad_id bigint NULL DEFAULT NULL,
  titulo varchar(255) ,
  PRIMARY KEY (id) USING BTREE,
  INDEX actividad_id(actividad_id ASC) USING BTREE,
  CONSTRAINT examenes_ibfk_1 FOREIGN KEY (actividad_id) REFERENCES actividades (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of examenes
-- ----------------------------

-- ----------------------------
-- Table structure for historial_cursos
-- ----------------------------
DROP TABLE IF EXISTS historial_cursos;
CREATE TABLE historial_cursos  (
  id bigint NOT NULL AUTO_INCREMENT,
  curso_id bigint NULL DEFAULT NULL,
  version int NOT NULL,
  titulo varchar(255)  NULL DEFAULT NULL,
  descripcion text NULL,
  fecha_creacion timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  CONSTRAINT historial_cursos_ibfk_1 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of historial_cursos
-- ----------------------------

-- ----------------------------
-- Table structure for materiales
-- ----------------------------
DROP TABLE IF EXISTS materiales;
CREATE TABLE materiales  (
  id bigint NOT NULL AUTO_INCREMENT,
  curso_id bigint NULL DEFAULT NULL,
  subtema_id bigint NULL DEFAULT NULL,
  tipo enum('video','pdf','imagen','link')  NULL DEFAULT NULL,
  url varchar(255) NOT NULL,
  PRIMARY KEY (id) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  INDEX subtema_id(subtema_id ASC) USING BTREE,
  CONSTRAINT materiales_ibfk_1 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT materiales_ibfk_2 FOREIGN KEY (subtema_id) REFERENCES subtemas (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of materiales
-- ----------------------------

-- ----------------------------
-- Table structure for notificaciones
-- ----------------------------
DROP TABLE IF EXISTS notificaciones;
CREATE TABLE notificaciones  (
  id bigint NOT NULL AUTO_INCREMENT,
  usuario_id bigint NULL DEFAULT NULL,
  mensaje text NOT NULL,
  leido tinyint(1) NULL DEFAULT 0,
  fecha timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) USING BTREE,
  INDEX usuario_id(usuario_id ASC) USING BTREE,
  CONSTRAINT notificaciones_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of notificaciones
-- ----------------------------

-- ----------------------------
-- Table structure for pagos
-- ----------------------------
DROP TABLE IF EXISTS pagos;
CREATE TABLE pagos  (
  id bigint NOT NULL AUTO_INCREMENT,
  usuario_id bigint NULL DEFAULT NULL,
  curso_id bigint NULL DEFAULT NULL,
  monto decimal(10, 2) NOT NULL,
  fecha_pago timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  tipo_suscripcion enum('mensual','anual')  NULL DEFAULT NULL,
  periodo varchar(255) NULL DEFAULT NULL,
  PRIMARY KEY (id) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  INDEX idx_pagos_usuario_id(usuario_id ASC) USING BTREE,
  CONSTRAINT pagos_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT pagos_ibfk_2 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of pagos
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS roles;
CREATE TABLE roles  (
  id bigint NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  PRIMARY KEY (id) USING BTREE
) ;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for subtemas
-- ----------------------------
DROP TABLE IF EXISTS subtemas;
CREATE TABLE subtemas  (
  id bigint NOT NULL AUTO_INCREMENT,
  curso_id bigint NULL DEFAULT NULL,
  titulo varchar(255) NOT NULL,
  descripcion text NULL,
  PRIMARY KEY (id) USING BTREE,
  INDEX curso_id(curso_id ASC) USING BTREE,
  CONSTRAINT subtemas_ibfk_1 FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of subtemas
-- ----------------------------

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios  (
  id bigint NOT NULL AUTO_INCREMENT,
  nombre varchar(255)  NOT NULL,
  email varchar(255) NOT NULL,
  contrasena varchar(255)  NOT NULL,
  fecha_registro timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  estado enum('activo','inactivo') NULL DEFAULT 'activo',
  PRIMARY KEY (id) USING BTREE,
  UNIQUE INDEX email(email ASC) USING BTREE,
  INDEX idx_usuarios_email(email ASC) USING BTREE
) ;

-- ----------------------------
-- Records of usuarios
-- ----------------------------

-- ----------------------------
-- Table structure for usuarios_roles
-- ----------------------------
DROP TABLE IF EXISTS usuarios_roles;
CREATE TABLE usuarios_roles  (
  usuario_id bigint NOT NULL,
  rol_id bigint NOT NULL,
  PRIMARY KEY (usuario_id, rol_id) USING BTREE,
  INDEX rol_id(rol_id ASC) USING BTREE,
  CONSTRAINT usuarios_roles_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT usuarios_roles_ibfk_2 FOREIGN KEY (rol_id) REFERENCES roles (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ;

-- ----------------------------
-- Records of usuarios_roles
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
