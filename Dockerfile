FROM node:14-alpine as build

WORKDIR /var/app/build

COPY package.json ./

RUN npm install --only=prod;

FROM node:14-alpine

ENV PORT=80

ARG USER=node
ENV HOME /home/$USER

WORKDIR $HOME

COPY --chown=$USER:$USER . .
COPY --from=build --chown=$USER:$USER /var/app/build/node_modules $HOME/node_modules

ENTRYPOINT ["node", "app"]