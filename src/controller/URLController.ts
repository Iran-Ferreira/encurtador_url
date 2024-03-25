import { Request, Response } from "express"
import shortid from "shortid"
import { config } from "../config/constants"
import { URLModel } from "../database/model/url"

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void>{
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        
        if(url){
            response.json(url)
            return
        }

        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        response.json(newURL)
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if(url){
            response.redirect(url.originURL)
            return
        }
        response.status(400).json({ error: "URL not found" })
    }
}