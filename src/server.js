import express from 'express'
import {jogosRouter} from "./routes/jogo.route.js";

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'Servidor Está Ligado'
    })
})

server.use('/jogos', jogosRouter)

server.listen(3000, () => {
    console.log('O servidor está rodando em http://localhost:3000')
})