FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .


RUN chmod -R 775 .
RUN chmod -R 775 /app
RUN chmod -R 775 ./*

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]
