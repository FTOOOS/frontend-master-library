import React from "react";
import styled from "styled-components";
import github from "../assets/github.svg";

const FooterContainer = styled.div`
  position: relative;
  margin-top: 150px;
  height: 80px;
  background: #666;
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 30px;
  right: 85px;
  color: white;
`;

const GitHubWrapper = styled.span`
  position: absolute;
  bottom: 22px;
  right: 25px;
  width: 50px;
  height: 40px;
  display: block;
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
      >
        <GitHubWrapper />
      </a>
    </FooterContainer>
  );
}
export default Footer;
