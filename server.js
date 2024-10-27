import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

// Dados principais para instância do servidor e banco de dados.
const server = fastify();
const database = new DatabasePostgres();

// MÉTODOS HTTP PARA DESENVOLVER UMA API
// GET - Recuperar dados de um servidor. Funciona apenas como consultas
// POST - Envia dados ao servidor para criar novos recursos. É usado para envio de formulários e novas entradas.
// PUT - Usado para atualizar recursos existentes
// DELETE - Utilizado para remover um recurso do servidor
// PATCH - Similar ao PUT, mas usado para atualizações parciais de um recurso


// POST -> http://localhost:3333/videos
// PUT -> http://localhost:3333/videos/5

//Request Body
// POST - Rota para criação de um vídeo
server.post('/videos', async (request, reply) => {

    const {title, description, duration} = request.body // Extrai dados da requisição

    // Função create para salvar os dados no banco de dados.
    await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

// Método GET -> Rota para listar os vídeos.
server.get('/videos', async (request) => {
    const search = request.query.search

    const videos = await database.list(search);
    console.log(videos)

    return videos;
})

//PUT -> Router Parameter: Rota para atualizar um vídeo existente usando um ID
server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id // Extrai o termo de busca através do ID
    const {title, description, duration} = request.body
    await database.update(videoId, {
        title,
        description,
        duration
    }) // Atualiza o banco de dados

    return reply.status(204).send() // Manda uma resposta vazia
})

// DELETE -> Rota para deletar um vídeo existente usando um ID
server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)
    
    return reply.status(204).send()
})

// Inicia o servidor na porta especifica ou na porta 3333
server.listen({
    port: process.env.PORT ?? 3333,
})

