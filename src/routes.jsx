import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/index'
import ListUsers from '../pages/ListUsers'

const router = createBrowserRouter([
    {
        path: '/',   //aqui é o caminho que vai ser direcionado tipo '/usuarios
        element: <Home/>
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers/>
    }
])

export default router