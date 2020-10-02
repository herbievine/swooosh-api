declare namespace Global {
    interface ExpressApp extends Express.Application {
        use: (use: any, value?: any) => void
        set: (set: string, value: any) => void
        listen: (port: number | string, callback: Function) => void
    }

    type setMiddleware = {
        setting: string
        value: any
    }

    type URL = {
        _id: string
        id: string
        url: string
        clicks: number
        redirect: string
        shortUrl: string
        createdOn: string
    }
}

export { Global }