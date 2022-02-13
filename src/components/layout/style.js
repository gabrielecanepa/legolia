import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "CeraPro", sans-serif;
    width: 100%;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    color: #2c2c2c;
    background: #fff;

    ul {
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
    }

    ${({ theme }) =>
      theme &&
      `
      * {
        &:focus, &:focus-visible {
          outline-color: ${theme.colors.primary};
          outline-style: dashed;
        }
        &::selection {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      }
    `}
  }
`
