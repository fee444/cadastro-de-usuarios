import DefaultButton from "../../src/assets/components/Button"
import DefaultBackGround from "../../src/assets/components/TopBackground"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container,Title,CardUsers, AvatarUsers,TrashIcon, ContainerUsers} from "./styles"
import IconTrash from '../../src/assets/trash.svg'
import { useNavigate } from "react-router-dom"

function ListUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUSers = async () => {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        
        getUSers()
    }, [])

   const deleteUsers = async (id) =>{
    await api.delete(`/usuarios/${id}`)
    const updateUsers = users.filter(user => user.id !== id)
    setUsers(updateUsers)
   }
    const navigate = useNavigate()

    return (
        <Container>
            <DefaultBackGround></DefaultBackGround>
            <Title>Listagem de Usuários</Title>
            <ContainerUsers>
            {users.map(user =>(
                <CardUsers key={user.id}>
                    <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${user.id}`}></AvatarUsers>
                    <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                    </div>
                <TrashIcon src={IconTrash} onClick={() =>deleteUsers(user.id)} ></TrashIcon>
                </CardUsers>
            ))}
    </ContainerUsers>

            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </Container>
    )
}

export default ListUsers