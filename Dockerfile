FROM node:19-bullseye

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD [ "node", "server/server.js" ]

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl --fail http://localhost:3000/api || exit 1

EXPOSE 3000