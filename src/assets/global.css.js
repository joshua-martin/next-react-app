import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        background-color: ${props => props.theme.color.babyBlue};
        font-family: Arial, Helvetica, sans-serif;
        padding: 24px 16px;
    }
    .main-container {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
    }
`