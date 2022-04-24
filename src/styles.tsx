import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #222;
    font-family: "Nanum Gothic Coding";
    color: white;
    line-height: 1.8rem;
  }
  ::-webkit-scrollbar { width: 9px; height: 9px; }
  ::-webkit-scrollbar-button { display: none; }
  ::-webkit-scrollbar-track-piece { background-color: #222; } 
  ::-webkit-scrollbar-thumb { border-radius: 9px; background-color: #888; }
  ::-webkit-scrollbar-thumb:hover { background: #777; }
  ::-webkit-scrollbar-thumb:active { background: #666; }
`;
