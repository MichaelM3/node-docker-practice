FROM node:lts

WORKDIR /app

COPY package.json package-lock.json ./

COPY src /app/src  
COPY tsconfig.json /app/tsconfig.json

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "node", "build/index.js" ]
