import { NavBarMenu } from '../../components/NavBarMenu'
import VerzelLogo from '../../assets/verzelLogo.png'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { useCallback, useRef } from 'react'
import { FiLock, FiMail } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'
import { Container, LogoImg } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USERS } from '../../store/reducers/type'
import { LogUser } from '../../store/reducers/actions'

interface SignInFormData {
    email: string
    password: string
}

const SignIn = () => {
    const tasks = useSelector((state: ADD_USERS) => state)
    const formRef = useRef<FormHandles>(null)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({})

                const schema = Yup.object().shape({
                    email: Yup.string().email('Digite um e-mail válido'),
                    password: Yup.string().min(6, 'Minimo de 6 caracteres')
                })

                await schema.validate(data, {
                    abortEarly: false
                })

                const taskfilter = tasks.users.filter(
                    (task) => task.email === data.email
                )

                const auth = taskfilter.filter(
                    (task) => task.password === data.password
                )

                const logged = {
                    id: auth[0].id,
                    name: auth[0].name
                }
                if (auth.length > 0) {
                    alert('Logado com sucesso')
                    dispatch(LogUser(logged))

                    history.push('/task')
                } else {
                    alert('usuario ou senha invalida')
                }
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err)

                    formRef.current?.setErrors(errors)

                    return
                }
            }
        },
        [dispatch, history, tasks.users]
    )
    return (
        <Container>
            <NavBarMenu />
            <LogoImg src={VerzelLogo} alt="verzel" />

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Logar</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    )
}

export { SignIn }
