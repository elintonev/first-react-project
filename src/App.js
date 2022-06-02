import React, { useState, useRef } from "react";
import axios from "axios";

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
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(data);
    setUsers([...users, data]);
  }

  function deletUsers(userid) {
    const newUsers = users.filter((user) => user.id !== userid);
    setUsers(newUsers);
  }
  return (
    <Container>
      <Image alt="people-talking" src={People} />
      <ContainerItens>
        <H1> Olá </H1> <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder="Nome " />
        <InputLabel> Idade </InputLabel>
        <Input ref={inputAge} placeholder="Idade " />
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deletUsers(user.id)}>
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
