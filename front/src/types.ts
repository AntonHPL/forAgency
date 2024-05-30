export type DataEl = {
    ais_name: string,
    metadata: number,
    electronic_services: number,
    catalogs: number,
}

export type User = {
    name: string,
    surname: string,
    middle_name: string,
    id: string | number,
    login: string,
    email: string,
    tel: string,
    password?: string,
}

export type InputData = {
    field: string,
    labelData: string,
    placeholder: string,
    value: string | number,
    type?: string,
    isRequired?: boolean
};