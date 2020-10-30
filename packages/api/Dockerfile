#BASE
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

# Layer 1
FROM node
WORKDIR /usr/app/
COPY package*.json ./
RUN npm install

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.json .

EXPOSE 4000
CMD node dist/src/index.js
