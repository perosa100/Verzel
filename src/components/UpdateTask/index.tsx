import { useCallback, useEffect, useRef, useState } from 'react'

import { Container } from './styles'

import { FiEdit, FiUser } from 'react-icons/fi'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '../../store/reducers/actions'
import { ADD_USERS } from '../../store/reducers/type'
import { Form } from '@unform/web'
import Input from '../Input'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
type taskProps = {
    id: string
    name: string
    done: boolean
}

export type UpdateTaskProps = {
    tasks: taskProps
}

const UpdateTask = ({ tasks }: UpdateTaskProps) => {
    const dispatch = useDispatch()
    const formRef = useRef<FormHandles>(null)

    const [showModal, setShowModal] = useState(false)

    const user_id = useSelector((state: ADD_USERS) => state.logger.id)
    let users = useSelector((state: ADD_USERS) => state.users)
    const user = users.filter((user) => user.id === user_id)
    const userNot = users.filter((user) => user.id !== user_id)
    let newTasks: any = user[0].tasks?.filter((task) => task.id === tasks.id)

    let newTasksNotTask: any = user[0].tasks?.filter(
        (task) => task.id !== tasks.id
    )

    const handleUpdateTask = useCallback(
        async (data: any) => {
            try {
                formRef.current?.setErrors({})
                const schema = Yup.object().shape({
                    name: Yup.string().required('Não pode alterar tarefa vazia')
                })

                await schema.validate(data, {
                    abortEarly: false
                })

                newTasks[0].name = data.name //tarefa att

                console.log('newTasksNotTask', newTasksNotTask)
                console.log('newTasks', newTasks)

                const newTaskUpdate = [...newTasksNotTask, ...newTasks]

                console.log('newTaskUpdate', newTaskUpdate)

                user[0].tasks = newTaskUpdate

                const form = [...userNot, ...user]

                dispatch(updateTodo(form))
                setShowModal(false)
                alert('Alterado com sucesso')
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err)

                    formRef.current?.setErrors(errors)

                    return
                }
            }
        },
        [dispatch, newTasks, newTasksNotTask, user, userNot]
    )

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
                <FiEdit size={27} color="#eeff00" />
            </button>

            {showModal && (
                <div className="container">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h2>Alterar Tarefa</h2>
                        </div>
                        <div className="modal-body">
                            <Form ref={formRef} onSubmit={handleUpdateTask}>
                                <Input
                                    name="name"
                                    icon={FiUser}
                                    placeholder="Alterar Tarefa"
                                />

                                <div className="modal-footer">
                                    <Button
                                        type="submit"
                                        style={{ background: '#00ff00' }}
                                    >
                                        Alterar
                                    </Button>
                                    <Button
                                        onClick={handleCloseModal}
                                        style={{ background: '#ff0000' }}
                                    >
                                        Voltar
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default UpdateTask
