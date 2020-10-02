import express from 'express'

const base: express.Router = express.Router()

base.get('/*', async (req, res) => {
    res.status(302).redirect('/api/v2')
})

export { base }
