FROM node:22-alpine

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código-fonte
COPY . .

# Expor a porta que o Next.js usa
EXPOSE 3000

# O comando será fornecido pelo docker-compose
CMD ["npm", "run", "dev"]