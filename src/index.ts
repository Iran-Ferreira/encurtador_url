import express from "express"
import { URLController } from './controller/URLController';

const porta = 3000

const api = express()
api.use(express.json())

const urlController = new URLController()
api.post("/shorten", urlController.shorten)

api.listen(porta, () => {
    console.log("Servidor rodando")
})