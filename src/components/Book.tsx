import React from "react";
import styled from "styled-components";
import book1 from "../assets/bookcover/book-removebg.png";

const Book = () => {
  return (
    <ImageContainer>
      <BookImageWrap>
        <BookImage>
          <img src={book1} alt="book" />
        </BookImage>
      </BookImageWrap>
    </ImageContainer>
  );
};

export default Book;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BookImageWrap = styled.div`
  &:before {
    display: block;
    content: "";
    height: 20%;
    width: 45%;
    position: absolute;
    background-image: url(https://i.imgur.com/5udcDlp.png);
    background-size: 90% auto;
    background-repeat: no-repeat;
    top: 84%;
    left: 35%;
    right: 0;
    transition: all 0.2s ease-out;
    transform-origin: 30% 50%;
    pointer-events: none;
  }

  &:hover {
    position: relative;
  }
`;

const BookImage = styled.div`
  min-width: 200px;
  max-width: 200px;
  will-change: transform;
  transform-origin: 0 100%;
  transition: transform 0.3s ease-out;
  @media screen and (min-width: 1000px) {
    width: 20rem;
  }

  &:hover {
    transform: rotate(-10deg);
  }

  img {
    width: 100%;
  }
`;
