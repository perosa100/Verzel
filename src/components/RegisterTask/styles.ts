import styled from 'styled-components'

export const Container = styled.span`
    Button {
        span {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;

            > svg {
                margin-left: 15px;
            }
        }
    }

    .container {
        display: block;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);

        .modal-content {
            position: relative;
            background-color: #fefefe;
            margin: auto;
            padding: 0;
            border: 1px solid #888;
            width: 30%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            -webkit-animation-name: animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: animatetop;
            animation-duration: 0.4s;
            margin-bottom: 15px;
        }

        /* Add Animation */
        @-webkit-keyframes animatetop {
            from {
                top: -300px;
                opacity: 0;
            }
            to {
                top: 0;
                opacity: 1;
            }
        }

        @keyframes animatetop {
            from {
                top: -300px;
                opacity: 0;
            }
            to {
                top: 0;
                opacity: 1;
            }
        }

        .close {
            color: white;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }

        .modal-header {
            padding: 10px 16px;
            background-color: #888;
            color: white;
            text-align: center;
        }

        .modal-body {
            padding: 15px 16px;
            color: #000;
            text-align: center;
            font-size: 1.5rem;
        }
        .modal-footer {
            display: flex;

            padding: 10px 16px;
            background-color: #888;
            color: white;
            text-align: center;

            > button + button {
                margin-left: 10px;
            }
        }
    }
`
