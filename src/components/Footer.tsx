import React from "react";
import styled from "styled-components";
import github from "../assets/github.svg";

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 50px;
  width: 100%;
  bottom: 0;
  height: 50px;
  background: #666;
`;

const FooterText = styled.span`
  text-align: right;
  color: white;
  font-size: 12px;
`;

const GitHubWrapper = styled.div`
  width: 50px;
  height: 40px;
  display: inline-block;
  background: url(${github}) no-repeat center center / 100% 100%;
  cursor: pointer;
`;

function Footer() {
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
