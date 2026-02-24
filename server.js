import fastify from "fastify"; 

 const servidor = fastify();

const usuarios =[]

 servidor.get('/usuarios', () => {
    return usuarios
 })

 servidor.post('/usuarios', (request, reply) => {
   const body = request.body
   usuarios.push(body)
   return 'usuario cadastrado'
})

 servidor.listen({
    port:3000
 })
