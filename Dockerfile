FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

VOLUME /app/node_modules

COPY . .

EXPOSE 4000

ENTRYPOINT ["yarn"]

CMD ["start"]



