import styled from "styled-components";
import { Link } from 'react-router-dom';


export const FormContainer = styled.div`
padding: 15px 5px;
gap: 10px;

@media (max-width: 750px) {
    display: grid;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
position: realtive;
`;

export const LinkEstilizado = styled(Link)`
text-decoration: none;
 color: teal;
 font-weight: bold;
 &:hover {
   text-decoration: underline;
 }
 `;

export const Title = styled.h1`
text-align: center;
fonte-size: 35px;
padding:15px;
color: teal;
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
border-radius: 4px;
padding: 11px;
border: 1px solid teal;
`;

export const Icon = styled.div`
position: absolute;
  right: 430px;
  top: 77%;
  transform: translateY(-50%);
  cursor: pointer;
  color: teal;
  font-size: 20px
  
`;

export const Button = styled.button`
padding: 10px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
width: 95px;
margin-top: 13px;
background-color: teal;
`;


