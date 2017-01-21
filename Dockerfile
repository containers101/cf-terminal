FROM node:6-onbuild

COPY ./package.json /terminal/package.json

WORKDIR /terminal

RUN apt-get install make gcc g++ python
RUN npm install

COPY ./app /terminal/app

EXPOSE 8000

CMD ["sh", "-c", "cd ./app && node index.js"]
