FROM node:12-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
RUN npm ci

ADD . /app

RUN npm run-script build

EXPOSE 4000
CMD ["npm", "start"]