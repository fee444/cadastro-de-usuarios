import styled from "styled-components";


export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
background-color:  #213555;
padding: 20px;
min-height: 100vh;
`



export const Title = styled.h2`
    color: #D8C4B6;
    text-align:center;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    margin: 10px 0;
    `
export const ContainerUsers = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    margin-bottom:20px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
    `
export const CardUsers = styled.div`
    background-color:rgb(99, 119, 151);
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;  
    border-radius:32px;
    padding: 20px;
    max-width: 450px;
    gap:40px;
    h3{
        font-size:1.5rem;
        color:white;
        text-transform:capitalize;
    }
    p{
        color:white;
        font-weight:400
    }
    `

export const AvatarUsers = styled.img`
    height:80px;
    `

export const TrashIcon = styled.img`
   cursor: pointer;
   &:hover{
    opacity: 0.8;
   }
   &:active{
    opacity: .5;
   }
    `
