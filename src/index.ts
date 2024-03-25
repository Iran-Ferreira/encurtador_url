import express from "express"
import { URLController } from './controller/URLController';
import { MongoConnetion } from "./database/MongoConnetion";
/* import dotenv from 'dotenv';
dotenv.config() */

const porta = 3000

const api = express()
api.use(express.json())

const database = new MongoConnetion()
database.connect()

const urlController = new URLController()
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect)

api.listen(porta, () => {
    console.log("Servidor rodando")
})