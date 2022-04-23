import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RoadMapBaseSvg } from "../assets/roadmap-base.svg";
import RoadMapImg from "../components/RoadMapImg";
import htmlcss from "../assets/htmlcss.svg";
import javascript from "../assets/javascript.svg";
import git from "../assets/git.svg";
import cooperation from "../assets/cooperation.svg";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import computerscience from "../assets/computerscience.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

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
`;

function RoadMap() {
  const navigate = useNavigate();

  const handleClick = (text: string) => {
    let path = `/category/${text}`;
    navigate(path);
  };

  return (
    <Wrapper>
      <IntroContainer></IntroContainer>
      <RoadMapWrapper>
        <RoadMapBase />
      </RoadMapWrapper>
      <RoadMapImgContainer>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg left="-200px" top="calc(100vh + 80px)" names={htmlcss} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg left="10px" top="40px" names={git} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg left="200px" top="50px" names={computerscience} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg left="-130px" top="10px" names={javascript} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg left="-40px" top="40px" names={typescript} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg left="-130px" top="30px" names={react} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg left="240px" top="-20px" names={cooperation} />
        </AnimationOnScroll>
      </RoadMapImgContainer>
    </Wrapper>
  );
}

export default RoadMap;
