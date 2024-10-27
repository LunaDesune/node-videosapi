# 📺 API de Gerenciamento de vídeos
Projeto feito com base no vídeo do Rocketseat para recuperar uma API de vídeos. Foi desenvolvida com o framework Fastify, utilizando Node.js e um banco de dados PostgreSQL. A aplicação oferece operações de CRUD para vídeos, para deleção, listagem, atualização e exclusão de registros.

## 🚀 Tecnologias utilizadas:

- **Node.js**: Plataforma de desenvolvimento para JavaScript no servidor.
- **Fastify**: Framework web para o Node.js
- **PostgreSQL**: Banco de dados relacional para o armazenamento dos vídeos.
- **Docker**: Utilizado para criar e gerenciar o ambiente do banco de dados PostgreSQL.

## Estrutura do projeto
- `server.js`: Arquivo principal para as rotas da API.
- `database-prostgres`: Classe para integração do banco de dados.

## Pré-requisitos:
* Node.js: instalado
* Docker: instalado

## Configuração do banco de dados com Docker

1. Crie um contêiner do PostgreSQL com o Docker:

```bash
docker run --name postgres-db -e POSTGRES_USER=your_user -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=videos -p 5432:5432 -d postgres
```

2. Esse comando vai criar um contêiner com:

- **Nome**: postgres-db
- **Usuário**: your-user
- **Senha**: your-password
- **Banco de dados**: videos
- **Porta**: 5432 (porta padrão para o PostgreSQL)

3. Após a criação do contêiner, você consegue acessar o banco de dados **"videos"**

```sql
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
)
```

## Configuração do Projeto:

1. Clone o repositório:
```bash
git clone https://github.com/LunaDesune/node-videosapi
cd node-videosapi
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Crie um arquivo ".env" na raiz do projeto para definir as variáveis do ambiente do banco de dados.
```env
PORT=3333
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=videos
```

## Executando a Aplicação

1. Para iniciar o servidor, use o comando:
```bash
npm start
```

2. O servidor vai estar disponível em `http://localhost:3333`