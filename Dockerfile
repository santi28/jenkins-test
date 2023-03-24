# Declaración de la imagen base
FROM node:lts-alpine3.11

# Declaración del directorio de trabajo
WORKDIR /app

# Copia de los archivos de la aplicación
COPY . .

# Instalación de las dependencias
RUN npm install

# Exposición del puerto
EXPOSE 3000

# Ejecución del comando
CMD ["npm", "start"]