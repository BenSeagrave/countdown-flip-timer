import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --grayish-blue: hsl(237, 18%, 59%);
    --soft-red: hsl(345, 95%, 68%);
    --white: hsl(0, 0%, 100%);
    --dark-desaturated-blue: hsl(236, 21%, 26%);
    --very-dark-blue: hsl(235, 16%, 14%);
    --very-dark-black-blue: hsl(234, 17%, 12%);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: url("../bg-stars.svg") top/100% 80% no-repeat, url("../pattern-hills.svg") bottom/100% 20% repeat-x, linear-gradient(to bottom, #1e1e28, #251d2c);
    font-size: 14px;
    font-family: 'Red Hat Text', sans-serif;
  }

  @keyframes top-to-bottom {
  0% {
    -webkit-transform: rotate3d(0);
            transform: rotate3d(0);
  }
  50% {
    -webkit-transform: rotate3d(-1, 0, 0, 90deg);
            transform: rotate3d(-1, 0, 0, 90deg);
  }
  100% {
    -webkit-transform: rotate3d(-1, 0, 0, 90deg);
            transform: rotate3d(-1, 0, 0, 90deg);
  }
}
@keyframes bottom-to-top {
  0% {
    -webkit-transform: rotate3d(1, 0, 0, 90deg);
            transform: rotate3d(1, 0, 0, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(1, 0, 0, 90deg);
            transform: rotate3d(1, 0, 0, 90deg);
  }
  100% {
    -webkit-transform: rotate3d(0);
            transform: rotate3d(0);
  }
}

`;
export default GlobalStyle;