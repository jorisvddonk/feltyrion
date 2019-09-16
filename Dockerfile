FROM node:12-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
RUN npm ci

ADD . /app

EXPOSE 4000
CMD ["npm", "run", "start"]