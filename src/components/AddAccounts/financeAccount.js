import axios from 'axios';
import * as F from "./styles";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FinanceAccount() {

    const [date, setDate] = useState({
        description: "",
        supplier: "",
        value: "",
        due_date: "",
        payment_date: ""
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    let data_americana = "2023-12-30";
    let data_brasileira = data_americana.split('-').reverse().join('/');
    console.log(data_brasileira);

    const valueInput = (e) => {
        const { name, value } = e.target;
        setDate({ ...date, [name]: value });
    };

    const handleSbmit = async (e) => {
        e.preventDefault();
        alert("Account added successfully!");

        await axios.post('http://localhost:3000/add-pay', {
            user_Id: localStorage.getItem('user'),
            description: e.target.description.value,
            supplier: e.target.supplier.value,
            value: e.target.value.value,
            due_date: e.target.due_date.value,
            payment_date: e.target.payment_date.value
        })
            .then((response) => {
                setMessage(response.data.message);
                setDate(response.data.message);
                navigate('/listaccounts');

            }).catch((err) => {
                if (err.response) {
                    setMessage(err.response.data.message);
                } else {
                    setMessage("Account added successfully!");
                }
            })

    };

    return (
        <F.FormContainer >
            <F.Linkestlized to="/listaccounts"><F.ButtonLink>List</F.ButtonLink></F.Linkestlized>
            <F.Title>Add accounts payable</F.Title>
            <F.Form onSubmit={handleSbmit}>
                <F.MessageP>{message ? <p>{message}</p> : " "}</F.MessageP>

                <F.Label>Description</F.Label>
                <F.Input type="text" placeholder="Description name" name="description" value={date.descricao} onChange={valueInput} maxLength={30} />

                <F.Label>Supplier</F.Label>
                <F.Input type="text" placeholder="Provider's name" name="supplier" value={date.supplier} onChange={valueInput} maxLength={30} />

                <F.Label>value</F.Label>
                <F.Input type="text" placeholder="Enter the value" name="value" value={date.value} onChange={valueInput} maxLength={10} />

                <F.Label>Due date</F.Label>
                <F.Input type="text" placeholder="dd/mm/yyyy" name="due_date" value={date.due_date} onChange={valueInput} maxLength={10} />

                <F.Label>Payment_date</F.Label>
                <F.Input type="text" placeholder="dd/mm/yyyy" name="payment_date" value={date.payment_date} onChange={valueInput} maxLength={10} />

                <F.Button type="submit" >To save</F.Button>
            </F.Form>
        </F.FormContainer>
    )
}

export default FinanceAccount;