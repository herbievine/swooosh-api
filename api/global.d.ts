declare namespace Global {
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
