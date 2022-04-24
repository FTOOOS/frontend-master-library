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
  height: 30rem;
`;

export const DetailBook = () => {
  return (
    <BookCoverContainer>
      <BookCover>
        <img src="http://image.kyobobook.co.kr/images/book/xlarge/239/x9791158392239.jpg" />
      </BookCover>
    </BookCoverContainer>
  );
};
