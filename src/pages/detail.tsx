import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DetailBook } from "../components/DetailBook";
import { shareKakao } from "../api/shareKakao";
import kakaoIcon from "../assets/ico_sns_kakao.svg";
import Utterances from "../api/utterances";

const Section = styled.div`
  width: 80%;
  height: 100vh;
  margin: 100px auto 0;
  /* background-color: #b2bec3; */
  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoverWrapper = styled.div`
  width: 100%;
  img { 
    position: absolute;
    top: 0; 
    left: 0; 
    max-width: 100%; 
    height: auto; 
    transform: translate(-50%,-50%); 
  }
`

const Thumbnail  = styled.div`
  position: relative; 
  padding-top: 100%; 
  overflow: hidden;
`

const Center = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
  transform: translate(50%,50%);
`

const Cover = styled.img`
  width: 20rem;
  height: 30rem;
  margin-right: 1.5rem;
  @media screen and (max-width: 764px) {
    width: 10rem;
    height: 20rem;
  }
`;

const BookInfo = styled.div`
  width: 100%;
  color: #f0efef;
  padding: 30px;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin: 1rem 0;
`;

const HorizontalLine = styled.hr`
  border-top: 0;
  border-bottom: solid 1px #d8d8d8;
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
  zoom: 1;
`

const Author = styled.span``;

const Publisher = styled.span``;

const Summary = styled.p`
  width: 100%;
  margin: 1rem 0;
  white-space: pre-wrap;
  color: #f0efef;
`;

const PurchaseLink = styled.a`
  display: block;
  width: 100px;
  height: 50px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: black;
  background: #ECECEC;
  border-radius: 10px;
  cursor: pointer;
  
 & + & {
   margin-left: 20px;
 }
`;

const SharingBtn = styled.a`
  cursor: pointer;
  width: 56px;
  position: relative;
  display: block;
  
  &:after {
    background: url(${kakaoIcon}) no-repeat 0 0;
    position: absolute;
    width: 56px;
    height: 56px;
    transform: translateX(-50%);
    content: "";
    left: 50%;  
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
  }, [param]);

  return (
    <>
      <Section>
        <FlexWrapper>
          <DetailBook src={selectedBook.img}/>
          <BookInfo>
            <Title>{selectedBook.bookTitle}</Title>
            <SubTitle>{selectedBook.bookSubTitle}</SubTitle>
              <Author>{selectedBook.author}</Author>
              <VerticalLine>|</VerticalLine>
              <Publisher>{selectedBook.publisher}</Publisher>
            <HorizontalLine/>
            <table>
              <colgroup>
                <col width="110"/>
                <col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">구매링크 바로가기</th>
                  <td>
                    <FlexWrapper>
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
                        yse24
                      </PurchaseLink>
                    </FlexWrapper>
                  </td>
                </tr>
                <tr>
                  <th scope="row">링크 공유하기</th>
                  <td>
                    <SharingBtn
                      onClick={(e) => {
                        e.preventDefault();
                        shareKakao(
                          selectedBook.bookTitle,
                          selectedBook.img,
                          window.location.href
                        );
                      }}
                    >
                    </SharingBtn>
                  </td>
                </tr>
              </tbody>
            </table>
          </BookInfo>
        </FlexWrapper>
        <Summary>{selectedBook.summary}</Summary>
        <Utterances repo="FTOOOS/comment" theme="photon-dark" />
      </Section>
    </>
  );
}

export default Detail;
