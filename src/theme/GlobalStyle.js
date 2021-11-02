import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
  * {
    font-family: 'Work Sans';
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
