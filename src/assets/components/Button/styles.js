import styled from "styled-components";

export const MyDefaultButton = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid white'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, rgba(216,196,182,1) 10%, rgba(62,88,121,1) 56%)' : 'transparent'} ;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: 30px;
    color: #F5EFE7;
    font-weight: bold;
    width: fit-content;
    cursor: pointer;
    transition: all .5s ease-in-out; 
    
    &:hover {
        opacity: .8;
    }

`;