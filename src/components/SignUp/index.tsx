import { useCallback, useRef, useState } from 'react'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import { Container } from './styles'

import {
    FiAlertTriangle,
    FiMail,
    FiMap,
    FiMapPin,
    FiSearch,
    FiUser
} from 'react-icons/fi'
import Input from '../Input'
import Button from '../Button'
import { formatarCpf, validarCpf } from '../../utils/validaCpf'
import formatarCep from '../../utils/validaCep'
import api from './../../services/api'
import { formatDate, validMinAge } from '../../utils/validaDateNasc'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/reducers/actions'
import { ADD_USER } from '../../store/reducers/type'
import { v4 as uuid } from 'uuid'

interface SignUpProps {
    handleCloseModal: () => void
}

type formCEP = {
    endereco: string
    estado: string
}
function SignUp({ handleCloseModal }: SignUpProps) {
    const dispatch = useDispatch()

    const formRef = useRef<FormHandles>(null)
    const [task, setTask] = useState('Teste')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [date, setDate] = useState('')
    const [formCep, setFormCep] = useState<formCEP>({
        endereco: '',
        estado: ''
    })

    const handleSubmit = useCallback(
        async (data: ADD_USER, { reset }, event: any) => {
            try {
                formRef.current?.setErrors({})

                const schema = Yup.object().shape({
                    name: Yup.string().required('Nome Obrigatório'),
                    email: Yup.string()
                        .required('E-Mail Obrigatório')
                        .email('Digite um e-mail válido'),
                    dataNasc: Yup.string()
                        .required('Data de Nascimento Obrigatório')
                        .test(
                            'DateNasci',
                            'Idade Inferior a 12 anos',
                            (date): any => validMinAge(date)
                        ),
                    cpf: Yup.string()
                        .min(14)
                        .max(14)
                        .test('cpf-valido', 'CPF Inválido', (cpf): any =>
                            validarCpf(cpf)
                        ),
                    cep: Yup.string(),
                    endereco: Yup.string(),
                    numero: Yup.string(),
                    password: Yup.string().required('Senha obrigatória'),
                    passwordConfirm: Yup.string()
                        .required('Confirmação de senha obrigatória')
                        .oneOf([Yup.ref('password')], 'Senhas Diferentes')
                })

                await schema.validate(data, {
                    abortEarly: false
                })
                data = {
                    ...data,
                    id: uuid()
                }

                dispatch(addUser(data))
                handleCloseModal()
                alert('Cadastrado com sucesso')
            } catch (err) {
                console.log(err, 'err')

                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err)
                    formRef.current?.setErrors(errors)
                    return
                }
            }
        },
        [dispatch, handleCloseModal]
    )
    const searchCep = useCallback(async () => {
        var cepFormatted = cep.replace('-', '')

        try {
            const result = await api.get(`${cepFormatted}/json/`)
            setFormCep({
                endereco: result.data.logradouro,
                estado: result.data.uf
            })
        } catch (error) {
            console.log('Cep não encontrado')
        }
    }, [cep])
    return (
        <Container>
            <div className="modal-content">
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <h2>Cadastro</h2>
                    </div>
                    <div className="modal-body">
                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <div className="grid-container">
                            <div>
                                <Input
                                    name="email"
                                    icon={FiMail}
                                    placeholder="E-mail"
                                />
                            </div>
                            <div>
                                <Input
                                    name="dataNasc"
                                    icon={FiSearch}
                                    placeholder="Data de Nascimento"
                                    value={date}
                                    onChange={(e) =>
                                        setDate(formatDate(e.target.value))
                                    }
                                />
                            </div>
                            <div>
                                <Input
                                    name="cpf"
                                    icon={FiSearch}
                                    placeholder="CPF"
                                    value={cpf}
                                    onChange={(e) =>
                                        setCpf(formatarCpf(e.target.value))
                                    }
                                />
                            </div>
                            <div>
                                <Input
                                    name="cep"
                                    icon={FiMapPin}
                                    placeholder="CEP"
                                    value={cep}
                                    onChange={(e) =>
                                        setCep(formatarCep(e.target.value))
                                    }
                                />
                            </div>
                            <div className="modalGridAdress">
                                <Input
                                    name="endereco"
                                    icon={FiMap}
                                    placeholder="Endereço"
                                    onClick={searchCep}
                                    value={formCep.endereco}
                                />
                            </div>

                            <div className="modalGridNumber">
                                <Input
                                    name="numero"
                                    icon={FiMap}
                                    placeholder="Número"
                                />
                            </div>
                            <div>
                                <Input
                                    name="password"
                                    type="password"
                                    icon={FiAlertTriangle}
                                    placeholder="Senha"
                                />
                            </div>
                            <div>
                                <Input
                                    name="passwordConfirm"
                                    type="password"
                                    icon={FiAlertTriangle}
                                    placeholder="Cofirme a senha"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type="submit" style={{ background: '#00ff00' }}>
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
        </Container>
    )
}

export default SignUp
