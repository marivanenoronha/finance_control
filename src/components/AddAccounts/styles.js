import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
max_width: 1120px;
width: 100%;
backgrond-color: #fff;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
padding: 8px 5px;
gap: 10px;

@media (max-width: 750px) {
    display: grid;
}
`;

export const Linkestlized = styled(Link)`
text-decoration: none;
 color: teal;
 font-weight: bold;
 &:hover {
   text-decoration: underline;
 }
 `;

export const Title = styled.h1`
 font-size: 31px;
 color: teal;
 text-align: center;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;


export const MessageP = styled.p`
font-size: 20px;
margin-top: 10px;
color: black;
`;

export const Label = styled.label`
margin-top: 5px;
padding:5px;
color: teal;
font-size: 22px;

`;

export const Input = styled.input`
width: 300px;
outline: none;
border-radius: 5px;
padding: 10px;
border: 1px solid teal;
`;

export const ButtonLink = styled.button`
padding: 8px;
border: none;
font-size: 16px;
border-radius: 5px;
cursor: pointer;
color: white;
width: 85px;
background-color: teal;
`;

export const Button = styled.button`
padding: 10px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
width: 95px;
margin-top: 8px;
background-color: teal;
`;
