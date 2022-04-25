import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Book from "../components/Book";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 200px;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 900px) and (min-width: 570px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  margin-top: 70px;
  width: 100%;
`;

const CategoryContainer = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0;
  font-weight: 1000;
  font-size: 4rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  line-height: 2.2rem;
`;

const Desc = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
`;

function Category({ match }: any) {
  const { group } = useParams();
  const [bookList, setBookList] = useState([]);
  const [describe, setDescribe] = useState();
  const [chk, setChk] = useState("");

  useEffect(() => {
    fetch("https://frontend-master-library.vercel.app/data/bookMock.json", {})
      .then((response) => response.json())
      .then((data) => {
        const entire = data.data;
        const length = Object.keys(entire).length;

        for (let i = 0; i < length; i++) {
          if (group === entire[i]["group"]) {
            setBookList(entire[i].bookList);
            setDescribe(entire[i].desc);
            setChk(entire[i].group);
          }
        }
      });
  }, [group]);

  return (
    <div>
      <CategoryContainer>{group}</CategoryContainer>
      <Desc>{describe}</Desc>
      <Section>
        <GridContainer>
          {bookList.map((el) => (
            <Link key={el.id} to={`/detail/${chk}/${el.id}`}>
              <GridItem key={el.id}>
                <Book
                  src={require("../assets/bookcover/" +
                    `${group}` +
                    "/" +
                    `${el.id}` +
                    ".png")}
                />
              </GridItem>
            </Link>
          ))}
        </GridContainer>
      </Section>
    </div>
  );
}

export default Category;
