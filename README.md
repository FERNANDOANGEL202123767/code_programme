# Code Programmer Microservices Project

Este proyecto consiste en una arquitectura de microservicios para gestionar varios módulos como autenticación, pagos, certificados, notificaciones, y más. Cada microservicio se ejecuta en Docker y se comunica a través de una API Gateway.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (versión 18.x o superior)
- [npm](https://www.npmjs.com/)

### 1. Instalación de Node.js (si es necesario)

1. Si no tienes Node.js actualizado o instalado, puedes usar `nvm` para gestionar las versiones:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

2. Carga **nvm** y asegúrate de que esté instalado correctamente:
   source ~/.bashrc
   nvm --version
3. Instala la versión más reciente de Node.js:
   nvm install 18
4. Verifica la versión instalada:
   node --version
5. Instala **npm** si no está instalado o actualízalo:
   npm install -g npm
### 2. Clonando el Proyecto

Clona este repositorio en tu máquina local:
  git clone https://github.com/[tu_usuario]/code_programmer.git
  cd code_programmer
### 3. Configuración de Docker

  Este proyecto utiliza Docker para ejecutar los microservicios y la base de datos MySQL. Asegúrate de tener Docker instalado y ejecutándose.
  **Pasos para levantar los servicios**
1. Navega al directorio raíz del proyecto y ejecuta el siguiente comando para levantar todos los contenedores:
   docker-compose up --build
  Esto levantará los servicios
### 4. Inicialización de la Base de Datos

  Al levantar el contenedor de MySQL, se crea automáticamente la base de datos **c_program**. Si deseas poblar la base de datos con datos iniciales, puedes usar un script SQL.
  Si no tienes los datos iniciales, asegúrate de tener un archivo **init.sql** en el directorio **sql-scripts**:
  docker exec -i mysql-db mysql -uroot -pcode2024 c_program < sql-scripts/init.sql
### 5. Ejecutar la Aplicación Frontend

1. Ve al directorio del frontend:
   cd frontend
2. Instala las dependencias de React:
   npm install
3. Corre el frontend en modo desarrollo:
   npm start
La aplicación estará disponible en **http://localhost:3010**
### 6. Uso de GitHub y Docker

  Cuando clonen el repositorio, asegúrate de que el equipo siga estos pasos:
1. Clona el repositorio:
   git clone https://github.com/FERNANDOANGEL202123767/code_programmer.git
2. Actualiza las dependencias locales y construye el proyecto en Docker:
   cd code_programmer
   docker-compose up --build
### 7. Subida de Cambios en el Microservicio

  Cuando un miembro del equipo haga modificaciones en algún microservicio, debe seguir estos pasos:
1. Haz un commit de los cambios:
   git add .
   git commit -m "Descripción de los cambios"
2. Sube los cambios al repositorio:
   git push origin master
### 8. Problemas Comunes

  Si encuentras problemas al levantar los servicios, asegúrate de que:
1. Docker esté ejecutándose.
2. Los puertos no estén en uso por otros servicios en tu máquina.
3. La configuración de **nvm** y **node** esté correcta.
4. Verifica las versiones de Node.js y npm.
   Puedes reiniciar Docker y reconstruir los contenedores con el siguiente comando:
     docker-compose down && docker-compose up --build
   
Prueba



