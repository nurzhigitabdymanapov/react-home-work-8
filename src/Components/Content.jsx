import React, { useState } from "react";
import styled from "styled-components";
import { Delete } from "./Delete";
import  ReactDOM  from "react-dom";

export const Content = ({ item, create, setCreate }) => {
  const [openDel, setOpenDel] = useState(false);

  const openDelete = () => {
    setOpenDel(!openDel);
    console.log("opendel");
  };
  return (
    <ItemContainer>
      {openDel &&
        ReactDOM.createPortal(
          <Delete
            id={item.id}
            setOpenDel={setOpenDel}
            openDelete={openDelete}
            create={create}
            setCreate={setCreate}
          />,
          document.getElementById("portal")
        )}

      <ItemDiv>
        <div>
          <ImgDiv src={item.img} alt="" />
        </div>
        <ContainerBtn>
          <ContainerTitleRating>
            <ContainerBtnH1>{item.title}</ContainerBtnH1>
            <RatingText>{item.rat}/5</RatingText>
          </ContainerTitleRating>
          <ContainerBtnSecond>
            <ContainerButton onClick={openDelete}>DELETE</ContainerButton>
          </ContainerBtnSecond>
        </ContainerBtn>
      </ItemDiv>
    </ItemContainer>
  );
};

const ItemDiv = styled.div`
  background-color: #ee82ee30;
  width: 700px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
const ImgDiv = styled.img`
  border-radius: 20px;
  width: 180px;
  height: 200px;
  padding: 10px;
`;
const RatingText = styled.p`
  background-color: orange;
  width: 100px;
  height: 30px;
  padding-top: 8px;
  padding-bottom: 0;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  color: white;
`;
const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ContainerBtnSecond = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  height: 188px;
  margin-left: 40px;
`;
const ContainerButton = styled.button`
  background-color: orange;
  width: 100px;
  height: 38px;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  border: 0;
  color: white;
`;
const ContainerBtnH1 = styled.h1`
  color: orange;
`;
const ContainerTitleRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  gap: 101px;
`;
