import React, { ReactNode, useState } from 'react'
import { ListTask } from '../../components/ListTask'
import { NavBarMenu } from '../../components/NavBarMenu'

import { Container, Content } from './styles'

import RegisterTask from '../../components/RegisterTask'

const Task = () => {
    return (
        <Container>
            <NavBarMenu />
            <Content>
                <h3>Lista de Tarefas</h3>
                <RegisterTask />

                <table style={{ width: '100%' }}>
                    <ListTask />
                </table>
            </Content>
        </Container>
    )
}

export { Task }
