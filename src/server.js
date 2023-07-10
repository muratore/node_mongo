import express from 'express';

const server = express();
const HOST = 'localhost'
const PORT = 3000

server.get('/', (req, res)=>{
    res.send('Olá Deu certo')
})

server.listen(PORT, ()=>console.log(`Server running at port ${HOST}:${PORT}`))