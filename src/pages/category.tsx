import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: salmon;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  background-color: white;
  gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const GridItem = styled.div`
  background-color: black;
  height: 30rem;
  &:hover {
    background-color: white;
  }
`;

function Category() {
  return (
    <div>
      <Section>
        Category
        <GridContainer>
          <GridItem>dd</GridItem>
          <GridItem>dd</GridItem>
          <GridItem>dd</GridItem>
          <GridItem>dd</GridItem>
          <GridItem>dd</GridItem>
          <GridItem>dd</GridItem>
        </GridContainer>
      </Section>
    </div>
  );
}

export default Category;
