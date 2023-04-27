import React from "react";
import styled from "styled-components";

export const Delete = ({ setOpenDel, setCreate, create, openDelete, id }) => {
  const deleteFilm = (id) => {
    setCreate(create.filter((item) => item.id !== id));
    openDelete();
    setOpenDel(false);
  };
  return (
    <>
      <BackdropContainer onClick={openDelete} />
      <DeleteContainer>
        <ContainerInnerDel>
          <TextContainer>
            <h1>Вы точно хотите удалить?</h1>
          </TextContainer>
          <DeleteButtonContainer>
            <DeleteButton onClick={() => deleteFilm(id)}>YES</DeleteButton>
            <DeleteButton onClick={openDelete}>NO</DeleteButton>
          </DeleteButtonContainer>
        </ContainerInnerDel>
      </DeleteContainer>
    </>
  );
};

const DeleteContainer = styled.div`
  position: fixed;
  top: 0;
  margin: 10% 37%;
  z-index: 2;
`;
const ContainerInnerDel = styled.div`
  width: 400px;
  height: 150px;
  background-color: orange;
  border-radius: 10px;
  border: 0;
`;
const BackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  background-color: #0606062f;
  backdrop-filter: blur(2px);
`;
const DeleteButton = styled.button`
  background-color: #cf3cac;
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const DeleteButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  height: 60%;
  gap: 50px;
`
const TextContainer = styled.div`
  text-align: center;
  font-size: 15px;
  color: #a31d84;
  margin-top: 80px;
`