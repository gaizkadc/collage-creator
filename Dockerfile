FROM node:15

WORKDIR /usr/src/collage-creator

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]