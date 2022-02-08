FROM node:16-alpine

RUN mkdir -p /opt/app

COPY . /opt/app
RUN chown -R node:node /opt/app

USER node
WORKDIR /home/node/app

CMD [ "/usr/local/bin/yarn", "runserver" ]

