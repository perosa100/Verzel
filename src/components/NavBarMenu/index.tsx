import { useCallback, useRef, useState } from 'react'
import { Container, LeftSide, LogoImg, RightSide } from './styles'
import VerzelLogo from '../../assets/verzelLogo.png'
import { Link, useHistory } from 'react-router-dom'
import { FiChevronDown, FiSearch, FiSmile } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Input from '../Input'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import SignUp from '../SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USERS } from '../../store/reducers/type'
import { deslogedUser } from '../../store/reducers/actions'

const NavBarMenu = () => {
    const tasks = useSelector((state: ADD_USERS) => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const [showModal, setshowModal] = useState(false)
    const [user, setUser] = useState(tasks.logger.name)
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: string) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string()
            })

            await schema.validate(data, {
                abortEarly: false
            })
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)

                return
            }
        }
    }, [])

    const handleShowModal = (e: any) => {
        e.preventDefault()
        setshowModal(true)
    }

    const handleCloseModal = () => {
        setshowModal(false)
    }

    const handleLoggout = () => {
        dispatch(deslogedUser())
        history.push('/')
    }

    return (
        <Container>
            <LeftSide>
                <Link to="/">
                    <LogoImg src={VerzelLogo} alt="" />
                </Link>
                <ul>
                    <li>
                        <a href="SOBRE NÓS">SOBRE NÓS</a>
                    </li>

                    <li className="dropdown">
                        <a href="" className="dropbtn">
                            Nossos Valores <FiChevronDown />
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li>
                        <a href="SOBRE NÓS">Contato</a>
                    </li>
                    <li>
                        <a href="SOBRE NÓS">
                            Nosso Time <FiChevronDown />
                        </a>
                    </li>
                </ul>
            </LeftSide>
            <RightSide>
                <ul>
                    <li>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Input
                                name="name"
                                icon={FiSearch}
                                placeholder="Search Verzel"
                            />
                        </Form>
                    </li>
                    {user === '' ? (
                        <>
                            <li>
                                <Link to="signin">Sign in</Link>
                            </li>
                            <li>
                                <a href="" onClick={handleShowModal}>
                                    Sign up
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <span
                                    style={{
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        color: 'red'
                                    }}
                                >
                                    logado
                                </span>
                                <span style={{ fontSize: '20px' }}>{user}</span>
                            </li>
                            <li>
                                <Link to="" onClick={handleLoggout}>
                                    Sair
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </RightSide>
            {showModal && <SignUp handleCloseModal={handleCloseModal} />}
        </Container>
    )
}

export { NavBarMenu }
