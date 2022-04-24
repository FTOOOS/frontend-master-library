import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RoadMap from "./pages/roadMap";
import Category from "./pages/category";
import Detail from "./pages/detail";
import styled from "styled-components";
import "reset-css";
import { GlobalStyles } from "./styles";
import initialize from "./api/initialize";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  padding: 1rem;
  background: #666;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

function App() {
  useEffect(() => {
    initialize();
  }, []);
  return (
    <BrowserRouter>
      <Header>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          프론트엔드 장인의 서재
        </Link>
      </Header>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<RoadMap />}></Route>
        <Route path="/category/:group" element={<Category />}></Route>
        <Route path="/detail/:group/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
