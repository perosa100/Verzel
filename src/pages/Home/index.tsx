import React, { ReactNode, useState } from 'react'
import { NavBarMenu } from '../../components/NavBarMenu'
import VerzelLogo from '../../assets/verzelLogo.png'

import { Container, LogoImg } from './styles'

interface HomeProps {
    children: ReactNode
}

const Home = () => {
    return (
        <Container>
            <NavBarMenu />
            <LogoImg src={VerzelLogo} alt="" />
            <h3>
                A Verzel é uma empresa focada em soluções digitais, atuando com
                desenvolvimento, <br />
                consultoria e reestruturação de Sistemas de Informação.
            </h3>
        </Container>
    )
}

export { Home }
