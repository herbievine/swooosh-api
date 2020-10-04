import express from 'express'
import Yup from "yup";
import {Global} from "../global";

const error = async (msg: string, stack: any, status?: number, res?: express.Response) => {
    if (res !== undefined) res.status(status | 400).json({
        msg: msg,
        stack: stack,
        ok: false,
        status: status | 400
    })
    else console.error(`========= ${msg} =========\n${stack}`)
}

const success = async (data: object | string, res: express.Response) => res.status(200).json({
    data: data,
    ok: true,
    status: 200
})


const validate = async (data: any, validator: Yup.ObjectSchema<object & Global.URL>) => {
    const url: Global.URL = await validator.validate(data)
    url['_id'] = data.id

    return url
}

export { error, success, validate }