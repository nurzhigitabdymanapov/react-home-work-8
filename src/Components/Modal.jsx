import React from "react";
import styled from "styled-components";
import { useRef } from "react";

export const Modal = ({ setOpenModal, create, setCreate }) => {
  const ttleValue = useRef();
  const imageValue = useRef();
  const ratingValue = useRef();

  const addInput = () => {
    if (
      ttleValue.current.value &&
      imageValue.current.value &&
      ratingValue.current.value !== ""
    ) {
      const datas = {
        id: Math.random().toString(),
        title: ttleValue.current.value,
        img: imageValue.current.value,
        rat: ratingValue.current.value,
      };
      setCreate([...create, datas]);
    } else {
      alert("Баардык инпуттарды толтурунуз!");
    }
    setOpenModal(false);
  };

  const close = () => {
    setOpenModal(false);
  };

  return (
    <>
      <BackdropContainerModal onClick={close} />
      <ModalContainer>
        <form>
          <ModalSecondContainer>
            <ModalSecondContainerDiv>
              <label >Movie Title:</label>
              <ModalSecondContainerDivInput type="text" ref={ttleValue} />
            </ModalSecondContainerDiv>
            <ModalSecondContainerDiv>
              <label >Movie Url:</label>
              <ModalSecondContainerDivInput type="url" ref={imageValue} />
            </ModalSecondContainerDiv>
            <ModalSecondContainerDiv>
              <label >Movie Rating:</label>
              <ModalSecondContainerDivInput type="number" ref={ratingValue} />
            </ModalSecondContainerDiv>
            <ModalSecondContainerDivButton>
              <ModalSecondContainerButton onClick={close}>
                Cancel
              </ModalSecondContainerButton>
              <ModalSecondContainerButton onClick={addInput}>
                Add
              </ModalSecondContainerButton>
            </ModalSecondContainerDivButton>
          </ModalSecondContainer>
        </form>
      </ModalContainer>
    </>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  margin: 10% 40%;
`;

const ModalSecondContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: #ffa600;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 0;
`;
const ModalSecondContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;
  font-size: 20px;
  margin-top: 20px;
`;
const ModalSecondContainerDivInput = styled.input`
  height: 30px;
  border-radius: 10px;
  border: 0;
`;
const ModalSecondContainerDivButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 350px;
  height: 70px;
  gap: 30px;
`;
const ModalSecondContainerButton = styled.button`
  background-color: #fff;
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 10px;
  font-size: 18px;
`;
const BackdropContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #0606062f;
  backdrop-filter: blur(2px);
`;
