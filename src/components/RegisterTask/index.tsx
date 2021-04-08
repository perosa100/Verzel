import React, { useCallback, useRef, useState } from 'react'

import { Container } from './styles'
import { v4 as uuid } from 'uuid'
import { GoCalendar, GoArchive } from 'react-icons/go'
import Button from '../Button'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import { Form } from '@unform/web'
import Input from '../Input'
import { FiPlus } from 'react-icons/fi'
import { formatDate } from './../../utils/validaDateNasc'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/reducers/actions'
import { ADD_USERS } from '../../store/reducers/type'

const RegisterTask = () => {
    const dispatch = useDispatch()

    const user_id = useSelector((state: ADD_USERS) => state.logger.id)

    let users = useSelector((state: ADD_USERS) => state.users)

    const user = users.filter((user) => user.id === user_id)
    const userNot = users.filter((user) => user.id !== user_id)

    let dateNow = new Date()
    let day = String(dateNow.getDate()).padStart(2, '0')
    let month = String(dateNow.getMonth()).padStart(2, '0')

    const [showModal, setShowModal] = useState(false)
    const [dateStart, setDateStart] = useState(
        `${day}/${month}/${dateNow.getFullYear()}`
    )
    const [dateEnd, setDateEnd] = useState()
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(
        async (data: any) => {
            try {
                formRef.current?.setErrors({})

                const schema = Yup.object().shape({
                    name: Yup.string().required('Tarefa Obrigatória'),
                    dateStart: Yup.string(),
                    dateEnd: Yup.string().required('Data de fim Obrigatória')
                })

                await schema.validate(data, {
                    abortEarly: false
                })

                data = {
                    ...data,
                    id: uuid(),
                    done: false
                }

                user[0].tasks?.push(data)

                const form = [...userNot, ...user]

                try {
                    dispatch(addTodo(form))
                    setShowModal(false)
                    alert('Cadastrado com sucesso')
                } catch (error) {
                    console.log(error)
                }
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err)

                    formRef.current?.setErrors(errors)

                    return
                }
            }
        },
        [dispatch, user, userNot]
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
            <Button onClick={handleShowModal}>
                <span>
                    Criar Tarefa <FiPlus />
                </span>
            </Button>

            {showModal && (
                <div className="container">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h2>Cadastrar Tarefa</h2>
                        </div>
                        <div className="modal-body">
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Input
                                    name="name"
                                    icon={GoArchive}
                                    placeholder="Nome da tarefa"
                                />
                                <Input
                                    name="dateStart"
                                    icon={GoCalendar}
                                    placeholder="Data Inicio"
                                    value={dateStart}
                                    onChange={(e) =>
                                        setDateStart(formatDate(e.target.value))
                                    }
                                />
                                <Input
                                    name="dateEnd"
                                    icon={GoCalendar}
                                    placeholder="Data Fim"
                                    value={dateEnd}
                                    onChange={(e) =>
                                        setDateEnd(formatDate(e.target.value))
                                    }
                                />
                                <div className="modal-footer">
                                    <Button
                                        style={{ background: '#00ff00' }}
                                        type="submit"
                                    >
                                        Cadastrar
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

export default RegisterTask
