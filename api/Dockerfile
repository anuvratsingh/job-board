#BASE
FROM node as builder

WORKDIR /main

ADD package.json /main

RUN npm install --silent 

ADD . /main

RUN npm run build


# Layer 1
# FROM node
# WORKDIR /usr/app/
# COPY package*.json ./
# RUN npm install

# COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.json .

EXPOSE 4000
CMD npm start
