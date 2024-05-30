FROM node:18-alpine

WORKDIR /quotes-frontend

COPY public/ /quotes-frontend/public
COPY src/ /quotes-frontend/src
COPY package.json /quotes-frontend/

RUN npm install

RUN chmod -R 775 /quotes-frontend

EXPOSE 5173

CMD ["npm", "run", "dev"]