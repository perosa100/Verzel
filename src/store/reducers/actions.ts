import { ADD_TODO, ADD_USER, LOGGED_USER } from './type'

export interface TypeAction {
    form: any
    user_id: string
    type: string
}
export function addTodo(form: any) {
    return { type: 'ADD_TODO', form }
}

export function addUser(form: ADD_USER) {
    return { type: 'ADD_USER', form }
}

export function removeTodo(form: any) {
    return { type: 'REMOVE_TODO', form }
}
export function updateTodo(form: any) {
    return { type: 'UPDATE_TODO', form }
}

export function doneTodo(form: any) {
    return { type: 'DONE_TODO', form }
}

export function LogUser(form: LOGGED_USER) {
    return { type: 'LOGGED_USER', form }
}

export function deslogedUser() {
    return { type: 'DESLOGED_USER' }
}
