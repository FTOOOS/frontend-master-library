import React from "react";
import styled from "styled-components";
import { BookCover } from "book-cover-3d";

const BookCoverContainer = styled.div`
  position: relative;
  display: block;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  width: 20rem;
  height: 22rem;
`;

export const DetailBook = ({src}) => {
  return (
    <BookCoverContainer>
      <BookCover>
        <img src={src} alt="Book" />
      </BookCover>
    </BookCoverContainer>
  );
};
