import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RoadMapBaseSvg } from "../assets/roadmap-base.svg";
import { ReactComponent as HtmlCss } from "../assets/htmlcss.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as Git } from "../assets/git.svg";
import { ReactComponent as ReactImg } from "../assets/react.svg";
import { ReactComponent as Typescript } from "../assets/typescript.svg";
import { ReactComponent as Cooperation } from "../assets/cooperation.svg";

import RoadMapImg from "../components/RoadMapImg";

const TestBlock = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

const Wrapper = styled.div``;

const RoadMapWrapper = styled.div`
  // display: flex;
  // justify-content: center;
  margin-top: 50px;
`;

const RoadMapBase = styled(RoadMapBaseSvg)``;

const IconWrapper = styled.div`
  position: fixed;
  left: 34;
  top: 65;
`;

const HtmlCssWrapper = styled(HtmlCss)``;

const JavscriptWrapper = styled(Javascript)``;

const GitWrapper = styled(Git)``;

const ReactWrapper = styled(ReactImg)``;

const TypescriptWrapper = styled(Typescript)``;

const CooperationWrapper = styled(Cooperation)``;

const Img = styled.img`
  width: 100%;
  height: 100%;
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

        <JavscriptWrapper />
        <GitWrapper />
        <ReactWrapper />
        <TypescriptWrapper />
        <CooperationWrapper />
      </RoadMapWrapper>
      <IconWrapper>
        <HtmlCssWrapper />
      </IconWrapper>
      <RoadMapImg />
    </Wrapper>
  );
}

export default RoadMap;
