FROM node:16.14.2

WORKDIR /api

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

ENV PORT_API_GATEWAY=8000
ENV PORT_SERVER=5000 

EXPOSE 8000

CMD ["node", "/api/dist/main.js"]