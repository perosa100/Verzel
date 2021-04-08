export interface ADD_TODO {
    id: string
    name: string
    done: boolean
    dateStart: string
    DateEnd: string
}

export interface ADD_USER {
    id: string
    name: string
    email: string
    dataNasc: string
    cpf: string
    cep: string
    endereco: string
    numero: string
    password: string
    tasks?: {
        id: string
        name: string
        done: boolean
        dateStart: string
        dateEnd: string
    }[]
}

export interface ADD_USERS {
    users: {
        id: string
        name: string
        email: string
        dataNasc: string
        cpf: string
        cep: string
        endereco: string
        numero: string
        password: string
        tasks?: {
            id: string
            name: string
            done: boolean
            dateStart: string
            dateEnd: string
        }[]
    }[]
    logger: {
        id: string
        name: string
    }
}

export interface LOGGED_USER {
    id: string
    name: string
}
