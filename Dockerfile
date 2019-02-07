FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

VOLUME /app/node_modules

COPY . .

RUN yarn build

EXPOSE 4000

ENTRYPOINT ["node"]

CMD ["./dist/index.js"]



