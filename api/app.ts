import { Global } from './global'
import { api } from './routes'
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import {
    setMiddleware,
    useMiddleware,
    establishConnection
} from './utils/functions'

dotenv.config()

const initApp = async () => {
    const app: Global.ExpressApp = await express()

    await setMiddleware(app, [{ setting: 'trust proxy', value: 1 }])
    await useMiddleware(app, [
        express.json(),
        cors(),
        helmet(),
        morgan('common'),
        ['/api/v2', api]
    ])
    await establishConnection(process.env.USER, process.env.PASS)

    return app
}

initApp().then((app: Global.ExpressApp) =>
    app.listen(process.env.PORT ?? 3000, () =>
        console.log('App initialized 🚀')
    )
)