import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        font-family: "Inter", "sans-serif";
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    body {
        height: 100vh;
        background-color: ${colors.white};
    }


    :root {
        --primary: ${colors.primary};
        --white: ${colors.white};
        --whiteWithOpacity: ${colors.gray[300]};
        --black: ${colors.black};
    }
`;

export const commonFlexPageStyle = `
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;