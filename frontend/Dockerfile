# Usa una imagen de Node.js
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json e instala dependencias
COPY package.json package-lock.json ./
RUN npm install  

# Copia todo el código
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider

# Construir el proyecto
RUN npm run build

# Servir la aplicación usando un servidor web simple
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Exponer el puerto que utilizará el contenedor
EXPOSE 3000
