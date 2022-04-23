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

const Wrapper = styled.div``;

const RoadMapWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const RoadMapBase = styled(RoadMapBaseSvg)``;

const RoadMapImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  left: 0;
  top: 100px;
`;

function RoadMap() {
  const navigate = useNavigate();

  const handleClick = (text: string) => {
    let path = `/category/${text}`;
    navigate(path);
  };

  return (
    <Wrapper>
      <RoadMapWrapper>
        <RoadMapBase />
      </RoadMapWrapper>
      <RoadMapImgContainer>
        <RoadMapImg left="250px" top="130px" names={htmlcss} />
        <RoadMapImg left="10px" top="60px" names={git} />
        <RoadMapImg left="10px" top="110px" names={computerscience} />
        <RoadMapImg left="10px" top="160px" names={javascript} />
        <RoadMapImg left="10px" top="210px" names={react} />
        <RoadMapImg left="10px" top="270px" names={typescript} />
        <RoadMapImg left="10px" top="320px" names={cooperation} />
      </RoadMapImgContainer>
    </Wrapper>
  );
}

export default RoadMap;
