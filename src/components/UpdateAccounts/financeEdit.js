import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import * as C from './styles';

const FinanceEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [date, setDate] = useState({
        description: '',
        supplier: '',
        value: '',
        due_date: '',
        payment_date: ''
    });

    const valueInput = (e) => setDate({ ...date, [e.target.name]: e.target.value });

    const getUser = async (e) => {

        await axios.get(`http://localhost:3000/pay/${id}`, {

        })
            .then((response) => {
                setDate(response.date);
            }).catch((err) => {
                if (err) {
                    console.error('Error listing account', err);
                } else {
                    setMessage('Account listed successfully!');
                }
            });
    }

    useEffect(() => {
        getUser();
    }, [id]);

    const editUser = async (e) => {
        e.preventDefault();

        alert("Account updated successfully!");

        await axios.put(`http://localhost:3000/pay/${id}`, date, {

        })
            .then((response) => {
                setDate(response.date);
                setMessage(response.data.message);
                navigate(`/viewaccounts/${id}`);

            }).catch((err) => {
                if (err) {
                    console.error('Error updating account', err);
                } else {
                    setMessage('Account updated successfully!');
                }
            });
    }

    return (
        <C.FormContainer >
            <C.Linkestlized to="/listaccounts"><C.Button>List</C.Button></C.Linkestlized>
            <C.Title>Edit payable account</C.Title>
            <C.Form onSubmit={editUser} >
                <C.MessageP>{message ? <p>{message}</p> : " "}</C.MessageP>
                <C.Label>Description</C.Label>
                <C.Input type='text' name="description" value={date.description} onChange={valueInput} maxLength={30} /><br />
                <C.Label>Supplier</C.Label>
                <C.Input type='text' name="supplier" value={date.supplier} onChange={valueInput} maxLength={30} /><br />
                <C.Label>Value</C.Label>
                <C.Input type='text' name="value" value={date.value} onChange={valueInput} maxLength={7} /><br />
                <C.Label>Due date</C.Label>
                <C.Input type="text" name="due_date" value={date.due_date} onChange={valueInput} maxLength={10} /><br />
                <C.Label>Payment_date</C.Label>
                <C.Input type="text" name="payment_date" value={date.payment_date} onChange={valueInput} maxLength={10} />
                <C.Button type='submit'>To update</C.Button>
            </C.Form>
        </C.FormContainer>
    )
};

export default FinanceEdit;
