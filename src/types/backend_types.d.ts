export type ExpressJSSuccessResponse = {
    status: boolean,
    length: number | undefined,
    meta: {
        message: string,
        status: number
    },
    data: any
}

export type ExpressJSErrorResponse = {
    status: boolean,
    meta: {
        message: string,
        status: number
    },
}