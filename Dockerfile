FROM node

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 5001

CMD ["./run.sh"]



