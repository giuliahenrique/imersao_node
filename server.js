import fastify from "fastify"; 

import{Pool} from 'pg'

const sql = new Pool({
   user: "postgers",
   password: "senai",
   host : "localhost",
   port: 5432,
   database: 'receitas'
})
 
const servidor = fastify();

const usuarios =[]

 servidor.get('/usuarios', async () => {
    const resultado = await sql.query(`select * from usuarios`)
    return resultado.rows
 })

 servidor.post('/usuarios', (request, reply) => {
   const body = request.body
   usuarios.push(body)
   return 'usuario cadastrado'
})

 servidor.listen({
    port:3000
 })

 })
