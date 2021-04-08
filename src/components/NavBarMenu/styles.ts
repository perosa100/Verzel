import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    height: 30px;
    margin: 36px auto;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        list-style-type: none;
        display: flex;

        justify-content: center;
        align-items: center;
    }

    li {
        float: left;
    }

    li a,
    .dropbtn {
        display: inline-block;
        color: white;
        text-align: center;
        margin: auto 5px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li a:hover,
    .dropdown:hover .dropbtn {
        opacity: 0.6;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        top: 60px;
        border-radius: 10px;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        text-decoration: none;
        display: block;
        color: #4a4655;
        text-align: center;
        font-size: 25px;
    }

    .dropdown-content a:hover {
        background-color: #f1f1f1;
        border-radius: 10px;
        font-size: 25px;
        text-align: center;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
`

export const LeftSide = styled.div`
    font-size: 1rem;
    width: 55%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const LogoImg = styled.img`
    height: 50px;
    width: 60px;
`

export const RightSide = styled.div`
    width: 45%;
    display: inline-block;

    li {
        font-size: 1rem;
        margin-left: 8px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    li:last-child {
        border: 1px solid #fff;
        padding: 8px;
        border-radius: 10px;
        cursor: pointer;

        a {
            text-align: center;
            margin-left: 2px;
        }
    }
`
