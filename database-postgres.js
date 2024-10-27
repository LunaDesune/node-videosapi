import { randomUUID } from "node:crypto" // Função para gerar IDs únicos.
import { sql } from './database.js' // Importa a conexão de banco de dados para executar as queries

export class DatabasePostgres{

    // Função para listar os vídeos com ou sem filtros de busca.
    async list(search){
       let videos;

       if (search){
        videos = await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'}`
       } else{
        videos = await sql`SELECT * FROM videos`
       }

       return videos;
    }

    /// Função para criar um novo vídeo.
    async create(video){
        const videoId = randomUUID()
        const {title, description, duration} = video;

        await sql`INSERT INTO videos (id, title, description, duration) 
        VALUES (${videoId}, ${title}, ${description}, ${duration})`
    }

    // Função para atualizar um vídeo através de um ID
    async update(id, video){
        const { title, description, duration } = video;

        await sql`UPDATE videos 
        SET title = ${title}, description = ${description}, duration = ${duration} 
        WHERE id = ${id}`;
    }

    // Função para deletar um vídeo através de um ID
    async delete(id){
        await sql`DELETE FROM videos WHERE id = ${id}`
    }

}