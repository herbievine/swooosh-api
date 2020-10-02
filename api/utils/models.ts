import mongoose from 'mongoose'
import { urlSchema } from "./schema";

const URL = mongoose.model('urls', urlSchema)

export { URL }