import { prop, getModelForClass } from "@typegoose/typegoose"

export class URL {
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    originURL: string

    @prop({ required: true })
    shortURL: string

    constructor(hash: string, originURL: string, shortURL: string){
        this.hash = hash
        this.originURL = originURL
        this.shortURL = shortURL
    }
}

export const URLModel = getModelForClass(URL)