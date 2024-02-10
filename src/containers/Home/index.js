import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles.js";

import Home from "../../assets/burguer-home.svg"
import Arrow from "../../assets/arrow.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const history = useHistory();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    });

    setUsers([...users, newUser]);
    history.push("/Orders")
  }

  return (
  <Container>
    <Image alt="logo-img" src={Home} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedidos</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Elon Musk" />

        <Button onClick={addNewUser}>
         Novo Pedido <img alt="arrow-icon" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;