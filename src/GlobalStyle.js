import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 10px auto;
    max-width: 650px;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.color.capeCod};
    background-image: url("${background}");
  }
`;
