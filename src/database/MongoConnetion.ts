import mongoose from "mongoose";
import { config } from "../config/constants";

export class MongoConnetion {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.URL_MONGO)
            console.log("Database conectado")
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }
}