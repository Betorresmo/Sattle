import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration:none;
  }

  body {
    background: #222831;
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font: 16px Lato, sans-serif;
  }

  #root {
    max-width: 1140px;
    padding: 40px 20px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
