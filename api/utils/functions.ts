import { Global } from '../global'
import mongoose, { Mongoose } from 'mongoose'
import { limit, slow } from './config'
import Yup from 'yup'
import { error, validate } from "./helpers";

const setMiddleware = async (app: Global.ExpressApp, setMiddle: Global.setMiddleware[]) => {
    for (let i = 0; i < setMiddle.length; i++) {
        app.set(setMiddle[i].setting, setMiddle[i].value)
    }
}

const useMiddleware = async (app: Global.ExpressApp, useMiddle: any[]) => {
    for (let i = 0; i < useMiddle.length; i++) {
        if (Array.isArray(useMiddle[i])) app.use(useMiddle[i][0], useMiddle[i][1])
        else app.use(useMiddle[i])
    }
}

const establishConnection = async (username: string, password: string) => {
    const URI = `mongodb+srv://${username}:${password}@swooosh.fk7ch.mongodb.net/swooosh?retryWrites=true&w=majority`;

    await mongoose.connect(
        URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (e) => e === null ? null : error('Connection to MongoDB failed', e)
    )
}

const save = async (data: Global.URL, model: Mongoose['Model'], validator: Yup.ObjectSchema) => {
    const url = await new model(await validate(data, validator as Yup.ObjectSchema<object & Global.URL>))
    await url.save()
}

const find = async (id: string, model: Mongoose['Model']) => new Promise((resolve, reject) =>
    model.findById(id, (err, doc: Global.URL | null) => {
        if (!doc) reject()
        else resolve(doc as Global.URL)
    })
)

const remove = async (id: string, model: Mongoose['Model']) => new Promise((resolve, reject) =>
    model.findByIdAndDelete(id, (err, doc) => {
        if (!doc) reject()
        else resolve(doc as Global.URL)
    })
)

export { setMiddleware, useMiddleware, establishConnection, save, find, remove }
