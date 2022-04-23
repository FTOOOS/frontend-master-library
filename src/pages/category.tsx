import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  margin-top: 82px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GridItem = styled.div`
  background-color: #54a0ff;
  height: 20rem;
  &:hover {
    background-color: white;
  }
`;

interface BookListProps {
  id: string;
  group: string;
  bookTitle: string;
}

function Category() {
  const [bookList, setBookList] = useState<BookListProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/bookList.json", {})
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setBookList(data.bookList);
      });
  }, []);

  // console.log(bookList);

  return (
    <div>
      <Section>
        <GridContainer>
          {bookList.map((el) => (
            <Link key={el.id} to={`/detail/${el.group}/${el.id}`}>
              <GridItem key={el.id}>{el.bookTitle}</GridItem>
            </Link>
          ))}
        </GridContainer>
      </Section>
    </div>
  );
}

export default Category;
