FROM node
WORKDIR /app
COPY . .
RUN yarn install

CMD ["yarn", "start"]