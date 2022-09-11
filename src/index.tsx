import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
// import { createGlobalStyle } from 'styled-components';

// interface IGlobal{
//   whiteColor?: {};
// }
// const GlobalStyle = createGlobalStyle<IGlobal>`
//   *{
//     @import url('./assets/fonts/Roboto-Regular.ttf')
//     font-family: roboto;
//   }
//   body {
//     background-color: ${props => (props.whiteColor ? 'white' : '#171b26')};
//     font-family: roboto;
//   }
// `

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
    {/* <GlobalStyle /> */}
  </React.StrictMode>
);

