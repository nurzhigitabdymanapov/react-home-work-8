import React, { useState } from "react";
import { Modal } from "./Modal";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Content } from "./Content";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [create, setCreate] = useState([
    {
      id: 1,
      title: "Avatar Aang",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezZSo2Pvavad-SUMJNxUJHKoW5pO7Oh1RXg&usqp=CAU",
      rat: "5",
    },
  ]);

  const addMovie = () => {
    setOpenModal(true);
    console.log("open");
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Favorite Movie</HeaderText>
        <HeaderButton onClick={addMovie}>ADD MOVIE</HeaderButton>
      </HeaderContainer>
      {openModal &&
        ReactDOM.createPortal(
          <Modal
            create={create}
            setCreate={setCreate}
            setOpenModal={setOpenModal}
          />,
          document.getElementById("portal")
        )}
      {create.map((item) => {
        return (
          <Content
            item={item}
            create={create}
            setCreate={setCreate}
            setOpenModal={setOpenModal}
          />
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h1`
  margin-left: 200px;
  color: orange;
`;
const HeaderButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 0;
  background-color: #ffa602;
`;
const HeaderContainer = styled.div`
  display: flex;
  gap: 800px;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #e015da21;
`;
