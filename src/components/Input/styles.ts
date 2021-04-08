import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
    background: #ada9ba;
    border-radius: 10px;
    padding: 10px;
    width: auto;

    border: 2px solid #ada9ba;
    color: #000;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isErrored &&
        css`
            color: #c53030;
            border-color: #c53030;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            color: #000;
            border-color: #e6e4e9;
            background: #e6e4e9;
        `}

  ${(props) =>
        props.isFilled &&
        css`
            color: #000;
            border-color: #e6e4e9;
            background: #e6e4e9;
        `}


  input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #000;

        &::placeholder {
            color: #000;
        }
    }
    > svg {
        margin-right: 3px;
    }
`
export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 3;

    svg {
        margin: 0;
    }
    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`
