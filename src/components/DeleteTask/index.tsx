import { useState } from 'react'

import { Container } from './styles'

import { FiTrash2 } from 'react-icons/fi'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USERS } from '../../store/reducers/type'
import { removeTodo } from '../../store/reducers/actions'

type taskProps = {
    id: string
    name: string
    done: boolean
}

export type DeleteTaskProps = {
    tasks: taskProps
}

const DeleteTask = ({ tasks }: DeleteTaskProps) => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)
    const user_id = useSelector((state: ADD_USERS) => state.logger.id)

    let users = useSelector((state: ADD_USERS) => state.users)

    const user = users.filter((user) => user.id === user_id)
    const userNot = users.filter((user) => user.id !== user_id)

    const handleDeleteTask = () => {
        const newTasks: any = user[0].tasks?.filter(
            (task) => task.id !== tasks.id
        )

        user[0].tasks = newTasks

        const form = [...userNot, ...user]

        console.log('form', form)
        try {
            dispatch(removeTodo(form))
            setShowModal(false)
            alert('Deletado com sucesso')
        } catch (error) {
            console.log(error)
        }
    }
    const handleShowModal = (e: any) => {
        e.preventDefault()
        setShowModal(true)
    }

    const handleCloseModal = (e: any) => {
        setShowModal(false)
    }

    return (
        <Container>
            <button
                onClick={handleShowModal}
                style={{ background: 'none', border: 'none' }}
            >
                <FiTrash2 size={27} color="#f30303" />
            </button>

            {showModal && (
                <div className="container">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h2>Deletar Tarefa</h2>
                        </div>
                        <div className="modal-body">
                            Deseja realmente Deletar a seguinte tarefa?
                            <br />
                            <strong>{tasks.name}</strong>
                        </div>
                        <div className="modal-footer">
                            <Button
                                onClick={handleDeleteTask}
                                style={{ background: '#00ff00' }}
                            >
                                Deletar
                            </Button>
                            <Button
                                onClick={handleCloseModal}
                                style={{ background: '#ff0000' }}
                            >
                                Voltar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default DeleteTask
