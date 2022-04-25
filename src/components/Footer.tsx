import React, { useEffect } from "react";
import styled from "styled-components";
import github from "../assets/github.svg";
import ReactGA from "react-ga";
import { useLocation, useNavigationType } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 50px;
  width: 100%;
  bottom: 0;
  height: 50px;
  background: #222;
`;

const FooterText = styled.span`
  text-align: right;
  color: white;
  font-size: 12px;
  margin-right: 10px;
`;

const GitHubWrapper = styled.div`
  width: 50px;
  height: 40px;
  display: inline-block;
  background: url(${github}) no-repeat center center / 100% 100%;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px;
`;

function Footer() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    ReactGA.initialize("G-TQTC88ZTKT");
  }, []);

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
    navigationType === "PUSH" && window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} 테오의 스프린트 7기
      </FooterText>

      <a
        target="_blank"
        href="https://github.com/FTOOOS/frontend-master-library"
        rel="noreferrer"
        style={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        <GitHubWrapper />
      </a>
    </FooterContainer>
  );
}
export default Footer;
