const INITIAL_STATE = {
    users: [
        {
            id: '123',
            name: 'Patrick',
            email: 'pp@pp.com',
            dataNasc: '',
            cpf: '',
            cep: '',
            endereco: '',
            numero: '',
            password: 'perosa',
            logged: false,
            tasks: []
        },
        {
            id: '321',
            name: 'DADA',
            email: 'dada@dada.com',
            dataNasc: '',
            cpf: '',
            cep: '',
            endereco: '',
            numero: '',
            password: 'dadada',
            logged: false,
            tasks: []
        }
    ],

    logger: {
        id: '',
        name: ''
    }
}

export default function todos(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                users: action.form
            }

        case 'REMOVE_TODO':
            return {
                ...state,
                users: action.form
            }

        case 'UPDATE_TODO':
            return {
                ...state,
                users: action.form
            }

        case 'DONE_TODO':
            return {
                ...state,
                users: action.form
            }

        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.form]
            }

        case 'LOGGED_USER':
            return {
                ...state,
                logger: action.form
            }
        case 'DESLOGED_USER':
            return {
                ...state,
                logger: { id: '', name: '' }
            }
        default:
            return state
    }
}
