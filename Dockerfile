FROM node:18-alpine

WORKDIR /quotes-frontend

COPY public/ /quotes-frontend/public
COPY src/ /quotes-frontend/src
COPY package.json /quotes-frontend/

RUN npm install

CMD ["npm run dev"]