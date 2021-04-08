import { useState } from 'react'

import { Container } from './styles'

import { FiCheckSquare } from 'react-icons/fi'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '../../store/reducers/actions'
import { ADD_USERS } from '../../store/reducers/type'

type taskProps = {
    id: string
    name: string
    done: boolean
}

export type DoneTaskTaskProps = {
    tasks: taskProps
}

const DoneTaskTask = ({ tasks }: DoneTaskTaskProps) => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)

    const user_id = useSelector((state: ADD_USERS) => state.logger.id)
    let users = useSelector((state: ADD_USERS) => state.users)
    const user = users.filter((user) => user.id === user_id)
    const userNot = users.filter((user) => user.id !== user_id)
    let newTasks: any = user[0].tasks?.filter((task) => task.id === tasks.id)

    let newTasksNotTask: any = user[0].tasks?.filter(
        (task) => task.id !== tasks.id
    )

    const handleDoneTaskTask = () => {
        console.log()

        newTasks[0].done = !!user_id //tarefa att

        console.log('newTasksNotTask', newTasksNotTask)
        console.log('newTasks', newTasks)

        const newTaskUpdate = [...newTasksNotTask, ...newTasks]

        console.log('newTaskUpdate', newTaskUpdate)

        user[0].tasks = newTaskUpdate

        const form = [...userNot, ...user]

        //  console.log('form', form)
        try {
            dispatch(updateTodo(form))
            setShowModal(false)
            alert('Alterado com sucesso')
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
                style={{ background: 'none', border: 'none' }}
                onClick={handleShowModal}
            >
                <FiCheckSquare size={27} color="#00ff62" />
            </button>

            {showModal && (
                <div className="container">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h2>Finalizar Tarefa</h2>
                        </div>
                        <div className="modal-body">
                            Deseja realmente Finalizar a seguinte tarefa?
                            <br />
                            <strong>{tasks.name}</strong>
                        </div>
                        <div className="modal-footer">
                            <Button
                                onClick={handleDoneTaskTask}
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

export default DoneTaskTask
