import React, { useState } from "react";

import People from "./Assets/PeopleTalking.svg";
import Arrow from "./Assets/Arrow.svg";
import Trash from "./Assets/Trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Input,
  InputLabel,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);

  function addNewUser() {
    setUsers([{ id: Math.random, name: "Elinton", age: 27 }]);
  }

  return (
    <Container>
      <Image alt="people-talking" src={People} />
      <ContainerItens>
        <H1> Olá </H1> <InputLabel> Nome </InputLabel>
        <Input placeholder="Nome " />
        <InputLabel> Idade </InputLabel> <Input placeholder="Idade " />
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button>
                <img alt="Lixeira" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}
export default App;
