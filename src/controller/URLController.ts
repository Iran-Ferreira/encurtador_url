import { Request, Response } from "express"
import shortid from "shortid"
import { config } from "../config/constants"

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void>{
        const { originURL } = req.body
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
        response.json({ originURL, hash, shortURL })
    }
}