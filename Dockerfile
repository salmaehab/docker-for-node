FROM node:12.18.3-alpine3.12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000:3000
CMD ["node", "index.js"]