import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoadMap from "./pages/roadMap";
import Category from "./pages/category";
import Detail from "./pages/detail";
import styled from "styled-components";
import "reset-css";
import { GlobalStyles } from "./styles";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 1rem;
  color: white;
  background: #666;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

function App() {
  return (
    <div>
      <Header>
        <h1>RoadMap</h1>
      </Header>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoadMap />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/category/javascript" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
