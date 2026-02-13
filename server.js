import fastify from "fastify"; 

 const servidor = fastify();

 servidor.get('/usuarios', () => {
    return 'ola mundo!'
 })

 servidor.post('/usuarios', (request, reply) => {
   return 'ola mundo!'
})

 servidor.listen({
    port:3000
 })
