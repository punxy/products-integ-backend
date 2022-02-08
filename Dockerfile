FROM node:17-alpine

RUN mkdir -p /home/node/app
COPY . /home/node/app

RUN chown -R node:node /home/node/app
USER node
WORKDIR /home/node/app

CMD [ "/usr/local/bin/yarn", "runserver" ]