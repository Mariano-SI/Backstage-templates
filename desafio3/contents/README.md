# Projeto ${{ values.name }}

## Descrição

${{ values.description }}

## Como executar a aplicação

### 1. Subindo o Banco de Dados com Docker

Antes de rodar a aplicação, certifique-se de que o **Docker** está aberto e execute o comando:


```sh
docker compose up -d
```

Isso iniciará o PostgreSQL no ambiente.

### 2. Executando a aplicação
Para rodar a aplicação localmente com suporte a hot reload, utilize:

```sh
npm run dev
```

### 3. Ambiente de produção

Para gerar o build de produção utilize o comando:

```sh
npm run build
```

Para iniciar a apliação buildada:

```sh
npm start
```
