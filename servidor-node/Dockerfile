FROM node:24-alpine

RUN apk add --no-cache git

WORKDIR /app

RUN git clone --depth 1 https://github.com/perla-rios/video-club.git /tmp/repositorio \
    && cp -R /tmp/repositorio/servidor-node/. /app/ \
    && rm -rf /tmp/repositorio

CMD ["node", "app.js"]
