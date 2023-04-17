FROM node:18.15.0

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn && yarn build

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/app.js"]