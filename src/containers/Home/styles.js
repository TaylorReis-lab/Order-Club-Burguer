import styled from "styled-components";

export const Container = styled.div`
    background-color: #000000;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
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

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
    letter-spacing: -0.41px;
    margin-left: 25px;
    margin-top: 25px;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    padding-left: 25px;
    color: #FFFFFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 21.9px;

`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    margin-top: 25px;
    background: #D93856;
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
    }
    &:hover {
        opacity: 0.5;
    }

    &:active {
        opacity: 0.9;
    }
`;