import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: #ebebeb;
    padding: 10px;
    border-radius: 10px;

    h3 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: #000;
    }
    Button {
        a {
            text-decoration: none;
            color: #000;
            font-weight: bold;
            span {
                font-size: 1.5rem;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    margin-left: 10px;
                }
            }
        }
    }
`
