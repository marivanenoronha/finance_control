import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
font-family: Arial, sans-serif;
padding: 15px 5px;

@media (max-width: 750px) {
  display: grid;
}
`;

export const ConfirmationView = styled.div`
  padding: 20px;
  text-align: center;
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
fonte-size: 36px;
padding:18px;
color: teal;
`;


export const AccountList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ItemAccount = styled.li`
  border: 2px solid #ccc;
  margin: 10px 0;
  padding: 10px;
  border-radius: 6px;
  background-color: #f0f0f0;
  width: 400px;
  height: 275px;
  margin: auto;
`;

export const MessageP = styled.p`
font-size: 18px;
margin-top: 17px;
color: teal;
`;

export const ButtonLink = styled.button`
 margin-top: 8px;
 margin-left: 5px;
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
position: relative;
padding: 10px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
width: 90px;
top: 30px;
background-color: teal;
`;