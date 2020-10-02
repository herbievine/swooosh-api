import express from 'express'
import { URL } from '../utils/models'
import { save, find } from '../utils/functions'
import { urlValidationSchema } from '../utils/schema'
import { error, success } from '../utils/helpers'

const api: express.Router = express.Router()

api.get('/', async (req, res) => {
    res.status(200).json({
        title: 'Base API for swooo[sh]'
    })
})

api.post('/create', async (req, res) => {
    try {
        await save(req.body, URL, urlValidationSchema)
        await success(req.body, res)
    } catch (e) {
        const msg = e.name === 'MongoError' ? 'URL already taken' : 'Formatting error'
        const code = e.name === 'MongoError' ? 409 : 400

        await error(msg, e, code, res)
    }
})

api.get('/analytics/:id', async (req, res) => {
    try {
        const url = await find(req.params.id, URL)
        await success(url as object, res)
    } catch (e) {
        await error('Can\'t find URL', e, 404, res)
    }
})

export { api }
