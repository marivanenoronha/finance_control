import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from './styles';

function DetailsAccount() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState({
        description: '',
        supplier: '',
        value: '',
        due_date: '',
        payment_date: '',
    });

    const getUser = async () => {

        await axios.get(`http://localhost:3000/pay/${id}`, {

        })
            .then((response) => {
                setAccounts(response.data);

            }).catch((err) => {
                console.error('Error viewing account', err);
            });
    }

    useEffect(() => {
        getUser();
    }, [id]);

    const DealDelete = () => {
        const idAccount = id;
        if (window.confirm("Are you sure you want to delete an account?")) {
            axios.delete(`http://localhost:3000/pay/${idAccount}`)
                .then((response) => {
                    if (response) {
                        alert('Account deleted successfully!');
                    }
                    navigate('/updateaccounts')
                }).catch((err) => {
                    console.error('Error deleting account!', err);
                    alert('Error deleting account!');
                });
        }
    }

    return (
        <C.Container>
            <C.Linkestlized to="/listaccounts"><C.ButtonLink>List</C.ButtonLink></C.Linkestlized>
            <C.ConfirmationView>
                <C.Title>Account details</C.Title>
                <C.AccountList>
                    <C.ItemAccount >
                    <C.MessageP>Supplier: {accounts.supplier}</C.MessageP>
                        <C.MessageP>Value: {accounts.value}</C.MessageP>
                        <C.MessageP>Due date: {(accounts.due_date)}</C.MessageP>
                        <C.MessageP>Payment_date: {(accounts.payment_date)}</C.MessageP>
                        <C.Linkestlized to={`/updateaccounts/${id}`}><C.Button>To edit</C.Button></C.Linkestlized>{" "}
                        <C.Button onClick={DealDelete}>Delete</C.Button>
                    </C.ItemAccount>
                </C.AccountList>
            </C.ConfirmationView>
        </C.Container>
    )
}

export default DetailsAccount;
