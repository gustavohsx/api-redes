FROM node:18-alpine

RUN npm install -g @nestjs/cli@9.2.0

USER node

WORKDIR /home/node/app