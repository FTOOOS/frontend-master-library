import React from "react";
import styled from "styled-components";
import typescript from "../assets/typescript.svg";

const ImgWrapper = styled.span`
  position: fixed;
  left: 0;
  top: 0;

  width: 150px;
  height: 100px;
  display: block;

  background: url("${typescript}") no-repeat center center / 100% 100%;
`;

interface RoadMapImgTypes {
  name: string;
}

const RoadMapImg = () => {
  return (
    <>
      <ImgWrapper />
    </>
  );
};

export default RoadMapImg;
