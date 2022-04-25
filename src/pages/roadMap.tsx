import React from "react";
import styled from "styled-components";
import { ReactComponent as RoadMapBaseSvg } from "../assets/roadmap-base.svg";
import RoadMapImg from "../components/RoadMapImg";
import htmlcss from "../assets/htmlcss.svg";
import javascript from "../assets/javascript.svg";
import git from "../assets/git.svg";
import cooperation from "../assets/cooperation.svg";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import computerscience from "../assets/computerscience.svg";
import mainLogo from "../assets/main-logo.png";
import downArrow from "../assets/down-arrow.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ReactGA from "react-ga";

const RoadMapWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const RoadMapBase = styled(RoadMapBaseSvg)``;

const RoadMapImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 100px;
`;

const IntroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IntroImage = styled.img`
  padding: 0 0 80px 0;
  margin-top: 80px;
`;

const IntroText = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  width: 95%;
`;

const IntroSubText = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  max-width: 700px;
  width: 90%;
`;

const DownArrow = styled.span`
  background: url(${downArrow}) no-repeat center center / 100% 100%;
  width: 30px;
  height: 30px;
  margin-top: 25px;
  cursor: pointer;
  z-index: 98;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

function RoadMap() {
  const handleDownArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    ReactGA.event({
      category: "Button",
      action: "scroll down arrow click",
      label: "scroll",
    });
  };

  return (
    <>
      <IntroContainer>
        <IntroImage src={mainLogo} alt="소프트웨어 장인 로드맵" />
        <IntroText>
          프론트엔드 개발자로 성장하고자 하는 사람들을 위한 "프론트엔드 장인의
          서재"
        </IntroText>
        <IntroSubText>
          끊임없이 쏟아지는 FE 개발 트렌드와 포스팅들의 홍수 속에서 정신이
          혼미해질 때가 있지 않나요? 🤔 <br /> 휘발성이 강하거나 신뢰도가
          떨어지는 정보들에 휩쓸리다 보면 어느 한가지에 딥 다이브 하지못해
          학습의 방향성을 잃고 이론적인 지식에 빈틈이 생길 수 있습니다.
          <br />
        </IntroSubText>
        <DownArrow onClick={handleDownArrowClick} />
      </IntroContainer>
      <RoadMapWrapper>
        <RoadMapBase />
      </RoadMapWrapper>
      <RoadMapImgContainer>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg
            left="-200px"
            top="calc(100vh + 90px)"
            names={htmlcss}
            category="htmlcss"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg left="-80px" top="25px" names={git} category="git" />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg
            left="150px"
            top="15px"
            names={computerscience}
            category="computerscience"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg
            left="40px"
            top="35px"
            names={javascript}
            category="javascript"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg left="-150px" top="35px" names={react} category="react" />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg
            left="-10px"
            top="30px"
            names={typescript}
            category="typescript"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg
            left="240px"
            top="0px"
            names={cooperation}
            category="cooperation"
          />
        </AnimationOnScroll>
      </RoadMapImgContainer>
      <div style={{ height: "150px" }} />
    </>
  );
}

export default RoadMap;
