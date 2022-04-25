import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import RoadMap from "./pages/roadMap";
import Category from "./pages/category";
import Detail from "./pages/detail";
import styled from "styled-components";
import { GlobalStyles } from "./styles";
import "reset-css";
import initialize from "./api/initialize";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

const Header = styled.header`
  position: fixed;
  top: 0;
  height: 30px;
  width: 100%;
  padding: 1rem;
  background: #666;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const LogoText = styled.span`
  position: relative;
  bottom: 8px;
  margin-left: 8px;
`;

function App() {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <BrowserRouter>
      <Header>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <img src={logo} alt="FTOOOS" style={{ height: "30px" }} />
          <LogoText>프론트엔드 장인의 서재</LogoText>
        </Link>
      </Header>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<RoadMap />} />
        <Route path="/category/:group" element={<Category />} />
        <Route path="/detail/:group/:id" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
