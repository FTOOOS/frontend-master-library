import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TestBlock = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

function RoadMap() {
  const navigate = useNavigate();
  const handleClick = (text: string) => {
    let path = `/category/${text}`;
    navigate(path);
  };

  return (
    <div>
      <h1>RoadMap</h1>
      <TestBlock key="javascript" onClick={() => handleClick("javascript")}>
        JavaScript
      </TestBlock>

      <TestBlock key="react" onClick={() => handleClick("react")}>
        React
      </TestBlock>
    </div>
  );
}

export default RoadMap;
