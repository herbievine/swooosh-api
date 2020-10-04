import { Global } from './global'
import { api } from './routes'
import { base } from './routes/base'
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
    const app: express.Application = await express()

    await setMiddleware(app, [{ setting: 'trust proxy', value: 1 }])
    await useMiddleware(app, [
        express.json(),
        cors(),
        helmet(),
        morgan('common'),
        ['/api/v2', api],
        ['/', base]
    ])
    await establishConnection(process.env.USER, process.env.PASS)

    return app
}

initApp().then((app: express.Application) =>
    app.listen(process.env.PORT ?? 3000, () =>
        console.log(`App initialized on port ${process.env.PORT ?? 3000} 🚀`)
    )
)
