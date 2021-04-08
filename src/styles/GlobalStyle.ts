import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {

    background: #4a4655 ;
    color:#fff;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px Roboto-Slab sans-serif;
    font-size:16px
  }



  button {
    cursor: pointer;
  }

`
