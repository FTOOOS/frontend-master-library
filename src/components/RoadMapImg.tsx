import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ImgWrapper = styled.span<RoadMapImgTypes>`
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
  width: 150px;
  height: 100px;
  display: block;
  background: url(${(props) => props.names}) no-repeat center center / 100% 100%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

interface RoadMapImgTypes {
  left?: any;
  top?: any;
  names?: any;
}

const RoadMapImg = (props) => {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    const path = `/category/${category}`;
    navigate(path);
  };

  return (
    <>
      {/*// @ts-ignore*/}
      <ImgWrapper
        onClick={() => handleClick(props.category)}
        left={props.left}
        top={props.top}
        names={props.names}
      />
    </>
  );
};

export default RoadMapImg;
