import 'dotenv/config'
import postgres from "postgres";

const URL = `localhost`

// Conexão com banco de dados
export const sql = postgres({
    host: URL,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})