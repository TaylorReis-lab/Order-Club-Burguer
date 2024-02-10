import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import axios from "axios";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  Button,
  Users,
} from "./styles.js";

import Orders from "../../assets/bag-burguer.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, [users]);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-img" src={Orders} />
      <ContainerItens>
        <H1>Pedidos!</H1>

        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <div>
                <p>{user.order}</p>
                <h1>{user.name}</h1>
              </div>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash-icon" src={Trash} />
              </button>
            </Users>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          Voltar <img alt="arrow-icon" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
