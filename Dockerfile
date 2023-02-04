FROM node:16.3.0-alpine

WORKDIR /api 

COPY . /api

RUN npm install && npm run build

ENV PORT_API_GATEWAY=8000
ENV PORT_SERVER=5000 

EXPOSE 8000

CMD ["node", "/api/dist/main.js"]