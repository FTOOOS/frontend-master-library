import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { shareKakao } from "../api/shareKakao";
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
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.2rem;
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Author = styled.span`
  margin-right: 2rem;
`;
const Publisher = styled.span``;
const Summary = styled.p`
  width: 100%;
  margin: 1rem 0;
  white-space: pre-wrap;
`;
const PurchaseLink = styled.a`
  display: block;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: white;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: black;
`;

const SharingBtn = styled.button``;

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
    img: "",
    kyobo: "",
    sharing: "",
    summary: "",
    yes24: "",
  });

  useEffect(() => {
    setParam(+id - 1);
    fetch("http://localhost:3000/data/bookMock.json", {})
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
    <div>
      <Section>
        <FlexWrapper>
          <Cover src={selectedBook.img} />
          <BookInfo>
            <Title>{selectedBook.bookTitle}</Title>
            <SubTitle>{selectedBook.bookSubTitle}</SubTitle>
            <div>
              <Author>{selectedBook.author}</Author>
              <Publisher>{selectedBook.publisher}</Publisher>
            </div>
            <Summary>{selectedBook.summary}</Summary>
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
            <SharingBtn
              onClick={() => {
                shareKakao(
                  selectedBook.bookTitle,
                  selectedBook.img,
                  "http://localhost:3000/detail/javascript/1"
                );
              }}
            >
              카카오톡 공유하기
            </SharingBtn>
          </BookInfo>
        </FlexWrapper>
        <Utterances repo="FTOOOS/comment" theme="photon-dark" />
      </Section>
    </div>
  );
}

export default Detail;
