import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');
  :root {
    --grayish-blue: hsl(237, 18%, 59%);
    --soft-red: hsl(345, 95%, 68%);
    --white: hsl(0, 0%, 100%);
    --dark-desaturated-blue: hsl(236, 21%, 26%);
    --very-dark-blue: hsl(235, 16%, 14%);
    --very-dark-black-blue: hsl(234, 17%, 12%);
  }
  body {
    background-color: #201E2B;
    background-image: url("../bg-stars.svg");
    font-size: 14px;
    font-family: 'Red Hat Text', sans-serif;
  }
`;
export default GlobalStyle;