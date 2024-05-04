import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from "./styles";

function FinanceList() {
  const [finances, setFinances] = useState([]);
  const [message, setMessage] = useState('');

  const getUsers = () => {
    axios.get(`http://localhost:3000/list-pay/${localStorage.getItem('user')}`)
      .then((response) => {
        setFinances(response.date);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response);
        } else {
          setMessage("Error: Try later!");
        }
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const DealDeleteAccount = (accountId) => {
    if (window.confirm('Are you sure you want to delete this payable account?')) {
      axios
        .delete(`http://localhost:3000/pay/${accountId}`)
        .then((response) => {
          if (response) {
            alert('Account deleted successfully!');
          }
        })
        .catch((error) => {
          console.error('Error deleting payable account:', error);
          alert('An error occurred while deleting the payable account.');
        });
    }
  };

  return (
    <C.Container>
      <C.Linkestlized to="/addaccounts"><C.ButtonLink>to add</C.ButtonLink></C.Linkestlized>
      <C.Title>List of accounts payable</C.Title>
      <C.Form >
        {message ? <p>{message}</p> : ""}
        <C.FinanceList>
          {finances.map((finance) => (
            <C.FinanceItem key={finance.id}>
              <span>Description: {finance.description}</span><br />
              <span>Supplier: {finance.supplier}</span><br />
              <span>Value: {finance.value}</span><br />
              <span>Due date: {(finance.due_date)}</span><br />
              <span>Payment_date: {(finance.payment_date)}</span><br /><br />
              <C.Linkestlized to={{ pathname: `/updateaccounts/${finance.id}` }}><C.Button >To edit</C.Button></C.Linkestlized>{" "}
              <C.Linkestlized to={{ pathname: `/viewaccounts/${finance.id}` }}><C.Button >To view</C.Button></C.Linkestlized>{" "}
              <C.Button onClick={() => DealDeleteAccount(finance.id)}>Delete</C.Button>
            </C.FinanceItem>
          ))}
        </C.FinanceList>
      </C.Form>
    </C.Container>
  )
}

export default FinanceList;