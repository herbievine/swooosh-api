import mongoose from 'mongoose'
import * as yup from 'yup'

const urlSchema = new mongoose.Schema({
    _id: String,
    id: String,
    url: String,
    redirect: String,
    shortUrl: String,
    clicks: Number,
    createdOn: String
})

const urlValidationSchema = yup.object({
    id: yup.string().trim().matches(/^[a-zA-Z0-9\-_]+$/gi).required(),
    url: yup.string().trim().url().required(),
    redirect: yup.string().trim().required(),
    shortUrl: yup.string().trim().url().required(),
    clicks: yup.number().required(),
    createdOn: yup.string().required()
})

export { urlSchema, urlValidationSchema }
