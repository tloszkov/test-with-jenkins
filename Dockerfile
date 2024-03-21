FROM node:alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "server.mjs" ]

EXPOSE 9000


