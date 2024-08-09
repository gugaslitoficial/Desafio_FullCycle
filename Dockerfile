FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]









#Foi adicionado 'COPY package*.json ./' e 'RUN npm install' para garantir que as dependências sejam instaladas de forma correta.
#Foi certificado que o comando 'CMD' é o correto para iniciar a aplicação.