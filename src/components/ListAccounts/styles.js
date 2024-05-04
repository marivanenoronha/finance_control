import styled from 'styled-components';
import { Link } from 'react-router-dom';

 export const Container = styled.div`
font-family: Arial, sans-serif;
padding: 10px 5px;

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
text-align: center;
fonte-size: 35px;
padding:15px;
color: teal;
`;

export const Form = styled.form`
isplay: flex;
flex-direction:column ;
`;

export const FinanceList = styled.ul`
list-style: none;
padding: 0;
color: teal;
max-width: 600px;
margin: 15px auto;
`;

export const FinanceItem = styled.li`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const ButtonLink = styled.button`
padding: 10px 10px;
font-size: 14px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
width: 80px;
margin-top: 8px;
margin-left: 5px;
background-color: teal;
`;

export const Button = styled.button`
position: relative;
padding: 10px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
width: 90px;
bottom: 3px;
background-color: teal;
`;
