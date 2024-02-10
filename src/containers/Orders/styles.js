import styled from "styled-components";

export const Container = styled.div`
    background-color: #000000;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const Image = styled.img`
    width: 342px;
    height: 354px;
    margin-top: 11px;
`;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32.1px;
    margin-top: 25px;
    margin-bottom: 35px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    margin-top: 25px;
    background: rgba(255, 255, 255, 0.14);
    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px; /* 164.706% */
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img {
        background: none;
        transform: rotate(180deg);
    }
    &:hover {
        opacity: 0.5;
    }

    &:active {
        opacity: 0.9;
    }
`;

export const Users = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 342px;
  height: 101px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  margin-bottom: 17px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Ajusta o alinhamento dos itens à esquerda */
    background: none;
    margin-left: 25px;
  }


  p {
    color: rgba(255, 255, 255, 1);
    line-height: 21.09px;
    font-style: 300;
    font-size: 18px;
    background: none;
    order: 1;
    margin-bottom: 30px;
  }

  h1 {
    color: rgba(255, 255, 255, 1);
    line-height: 21.09px;
    font-style: 700;
    font-size: 18px;
    background: none;
    order: 2;
  }

  button, img {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
    margin-right: 6px;
  }

`;
