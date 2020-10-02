import Yup from "yup";

const error = async (msg: string, stack: any, status?: number, res?: any) => {
    if (res !== undefined) res.status(status | 400).json({
        msg: msg,
        stack: stack,
        ok: false,
        status: status | 400
    })
    else console.error(`========= ${msg} =========\n${stack}`)
}

const success = async (data: object, res: any) => res.status(200).json({
    data: data,
    ok: true,
    status: 200
})


const validate = async (data: any, validator: Yup.ObjectSchema<object & {_id: string}>) => {
    const url = await validator.validate(data)
    url['_id'] = data.id

    return url
}

export { error, success, validate }