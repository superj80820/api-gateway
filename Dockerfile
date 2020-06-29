FROM node:10.11.0-alpine

WORKDIR /api-gateway

COPY . /api-gateway

RUN npm install

ENTRYPOINT ["npm", "start"]