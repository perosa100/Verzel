import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Container } from './styles'

import { FiEye } from 'react-icons/fi'
import Button from '../Button'

type taskProps = {
    id: number
    name: string
    done: boolean
    dateStart: string
    dateEnd: string
}

export type ShowTaskProps = {
    tasks: taskProps
}

const ShowTask = ({ tasks }: ShowTaskProps) => {
    const [showModal, setShowModal] = useState(false)

    const handleShowTask = () => {}
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
                <FiEye size={27} color="#0026ff" />
            </button>

            {showModal && (
                <div className="container">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h2>Dados da Tarefa</h2>
                        </div>
                        <div className="modal-body">
                            <p>Nome da Tarefa</p>
                            <strong>{tasks.name}</strong>
                            <p>Date de Inicio:</p>
                            <strong>{tasks.dateStart}</strong>
                            <p>Date de Inicio</p>
                            <strong>{tasks.dateEnd}</strong>
                        </div>
                        <div className="modal-footer">
                            <Button
                                onClick={handleCloseModal}
                                style={{ background: '#00ff00' }}
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

export default ShowTask
