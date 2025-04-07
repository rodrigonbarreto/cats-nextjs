# Aplicação Frontend de Adoção de Gatos

Este é um projeto para PUC-RJ desenvolvido em Next.js, TypeScript e Tailwind CSS.
O projeto é uma aplicação de adoção de gatos, onde os usuários podem visualizar informações sobre gatos disponíveis para adoção.

## Executando com Docker

### Ambiente de Produção

Para executar a aplicação em um ambiente de produção:

```bash
# Construir e iniciar o contêiner
docker compose up --build

# Ou, para executar em segundo plano
docker compose up --build -d
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.


## Executando sem Docker

First, run the development server:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Acesse [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Saiba Mais

Para saber mais sobre Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.