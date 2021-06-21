FROM node:14

WORKDIR /app

COPY ./api/package*.json ./

RUN npm install

COPY ./api .

ENV PORT=9001

EXPOSE 9001

CMD [ "npm",  "start" ]