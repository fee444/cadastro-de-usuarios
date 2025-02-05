import { Title, Form, ContainerINputs, Input, InputLabel, Container } from "../Home/styles"
import UsersImage from '../../src/assets/users.png'
import { useRef } from "react"
import api from '../../services/api'
import DefaultButton from "../../src/assets/components/Button"
import DefaultBackGround from "../../src/assets/components/TopBackground"
import { useNavigate } from 'react-router-dom'

function Home() {
  const userName = useRef()
  const userAge = useRef()
  const userEmail = useRef()

  const navigate = useNavigate()
  const showUser = async () => {
    const data = await api.post('/usuarios', {
      email: userEmail.current.value,
      age: parseInt(userAge.current.value),
      name: userName.current.value
    })
    alert("Usuário criado com sucesso!")
  }

  return (
    <Container>
     <DefaultBackGround></DefaultBackGround>
      <Form action="">
        <Title>Cadastrar Usuários</Title>
        <ContainerINputs>
          <div>
            <InputLabel>Nome <span>*</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={userName} />
          </div>

          <div>
            <InputLabel>Idade <span>*</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={userAge} />
          </div>

        </ContainerINputs>

        <div style={{ width: '100%' }}>
          <InputLabel>Email <span>*</span></InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={userEmail} />
        </div>
        <DefaultButton type="button" onClick={showUser} theme="primary">Cadastrar Usuário</DefaultButton>
        
        
      </Form>
      <DefaultButton type="button" onClick= {() => navigate('/lista-de-usuarios')}>Ver usuários</DefaultButton>
    </Container>
  )
}

export default Home
