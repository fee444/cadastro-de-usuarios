import styled from 'styled-components'

export const Container = styled.div`
background-color: #213555;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;

`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;


`

export const Title = styled.h2`
    color: #D8C4B6;
    text-align:center;
    font-size: 38px;
    font-style: normal;
    font-weight: 700
    `

export const ContainerINputs = styled.div`
    display: flex;
    gap: 20px;



`
export const Input = styled.input`
border-radius: 10px;
border: 1px solid #F5EFE7;
padding: 12px 20px;
outline: none;
width: 100%;


`



export const InputLabel = styled.label`
    color: white;
    font-size: 12px;
    font-weight: bold;
    span{
        color: #ef4f45;
        font-weight: bold;

    }
`