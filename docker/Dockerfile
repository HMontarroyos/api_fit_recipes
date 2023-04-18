FROM node:18.15.0

WORKDIR /app

RUN pwd

COPY package.json .
COPY yarn.lock .

COPY . .

RUN yarn && yarn build


EXPOSE 3000

CMD ["node", "dist/server.js"]