import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DetailBook } from "../components/DetailBook";
import { shareKakao } from "../api/shareKakao";
import kakaoIcon from "../assets/ico_sns_kakao.svg";
import Utterances from "../api/utterances";
import ReactGA from "react-ga";

const Section = styled.div`
  width: 80%;
  height: 100%;
  margin: 100px auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 82px 10px 10px 0;
  }
  padding-bottom: 80px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .links {
    justify-content: space-between;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const BookInfo = styled.div`
  color: #f0efef;
  position: relative;
  margin: 0px auto;
  margin-top: 70px;
  width: 80%;
  max-width: 600px;
  @media screen and (min-width: 1024px) {
    left: -8%;
    width: 45%;
  }
  @media screen and (min-width: 1300px) {
    left: -13%;
    width: 40%;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  line-height: 1.3rem;
  margin: 1rem 0;
  word-break: keep-all;
`;

const HorizontalLine = styled.hr`
  border-top: 0;
  border-bottom: solid 1px #d8d8d8;
  max-width: 750px;
`;

const VerticalLine = styled.em`
  margin: 4px 4px 0 4px;
  width: 1px;
  height: 12px;
  text-indent: -999em;
  border-right: solid 1px #ccc;
  overflow: hidden;
  text-align: left;
  vertical-align: top;
  display: inline-block;
  zoom: 1.4;
`;

const Author = styled.span``;

const Publisher = styled.span``;

const Suggestion = styled.p`
  width: 70%;
  margin: 3rem auto;
  white-space: pre-wrap;
  text-align: center;
  color: #f0efef;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
  }
`;

const Summary = styled.p`
  width: 100%;
  margin: 1rem auto;
  white-space: pre-wrap;
  color: #f0efef;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
  }
  max-width: 750px;
  margin-bottom: 30px;
`;

const Links = styled.div`
  display: flex;
  line-height: 50px;
  vertical-align: center;
  margin-top: 20px;
`;

const PurchaseLink = styled.a`
  display: block;
  width: 100px;
  height: 55px;
  margin-left: 1rem;
  line-height: 55px;
  text-align: center;
  text-decoration: none;
  color: black;
  background: #ececec;
  border-radius: 30px;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

const SharingBtn = styled.a`
  cursor: pointer;
  width: 56px;
  display: block;
  margin-left: 2rem;
  &:after {
    background: url(${kakaoIcon}) no-repeat 0 0;
    position: absolute;
    width: 56px;
    height: 56px;
    content: "";
  }
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

interface DetailProps {
  id: string;
  bookTitle: string;
  bookSubTitle: string;
  author: string;
  publisher: string;
  img: string;
  kyobo: string;
  sharing: string;
  summary: string;
  yes24: string;
  suggestion: string;
}

function Detail({ match }: any) {
  const { group, id } = useParams();
  const [param, setParam] = useState(0);

  const [selectedBook, setSelectedBook] = useState<DetailProps>({
    id: "",
    bookTitle: "",
    bookSubTitle: "",
    author: "",
    publisher: "",
    img: "https://i.imgur.com/HxbUvqG.png",
    kyobo: "",
    sharing: "",
    summary: "",
    yes24: "",
    suggestion: "",
  });

  useEffect(() => {
    setParam(+id - 1);
    fetch(window.location.origin + "/data/bookMock.json", {})
      .then((response) => response.json())
      .then((data) => {
        const entire = data.data;
        const length = Object.keys(entire).length;

        for (let i = 0; i < length; i++) {
          if (group === entire[i]["group"]) {
            setSelectedBook(data.data[i].bookList[param]);
          }
        }
      });
  }, [param, group, id]);

  return (
    <>
      <Section>
        <FlexWrapper>
          <DetailBook src={selectedBook.img} />
          <BookInfo>
            <Title>{selectedBook.bookTitle}</Title>
            <SubTitle>{selectedBook.bookSubTitle}</SubTitle>
            <Author>{selectedBook.author}</Author>
            <VerticalLine>|</VerticalLine>
            <Publisher>{selectedBook.publisher}</Publisher>
            <HorizontalLine />
            <FlexWrapper className="links">
              <Links>
                <PurchaseLink
                  href={selectedBook.kyobo}
                  target="_blank"
                  rel="noreferrer"
                >
                  교보문고
                </PurchaseLink>
                <PurchaseLink
                  href={selectedBook.yes24}
                  target="_blank"
                  rel="noreferrer"
                >
                  yes24
                </PurchaseLink>
                <SharingBtn
                  onClick={(e) => {
                    e.preventDefault();
                    shareKakao(
                      selectedBook.bookTitle,
                      selectedBook.img,
                      window.location.href
                    );
                    ReactGA.event({
                      category: "Button",
                      action: "share kakao button",
                      label: "share",
                    });
                  }}
                ></SharingBtn>
              </Links>
            </FlexWrapper>
          </BookInfo>
        </FlexWrapper>
        <Suggestion>"{selectedBook.suggestion[0]}"</Suggestion>
        <Suggestion>"{selectedBook.suggestion[1]}"</Suggestion>
        <HorizontalLine />
        <Summary>{selectedBook.summary}</Summary>
        <Utterances repo="FTOOOS/comment" theme="photon-dark" />
      </Section>
    </>
  );
}

export default Detail;
