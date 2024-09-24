
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# No se expone un puerto ya que es solo backend

CMD ["node", "server.js"] 
