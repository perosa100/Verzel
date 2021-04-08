import styled from 'styled-components'

export const Container = styled.div`
    color: #000;
    .hidden {
        display: none;
    }

    tr {
        padding: 5px;
        span {
            font-size: 2rem;
        }
        th {
            width: 100%;
            padding: 5px 15px;
            background-color: #4f0bdd;
        }
        td {
            padding: 10px;
            span {
                font-size: 1.5rem;
                text-align: center;
            }
        }
        td:last-child {
            width: 100px !important;
            margin-right: 1rem;
        }
    }
    tr:nth-child(even) {
        background-color: #747474;
    }
    tr:nth-child(odd) {
        background-color: #c5c5c5;
    }
`
