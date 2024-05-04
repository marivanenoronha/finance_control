import React, { useState } from 'react';
import PasswordInput from './passwordInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as C from "./styles";

function AccountLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault('Login successful!');
        alert()
        await axios.post('http://localhost:3000/login', {
            email,
            password,
        })
            .then((response) => {
                const { token, user} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', user.id);
                navigate('/addaccounts');

            }).catch((err) => {
                console.error("Incorrect username or password!" + err);
                alert('Incorrect username or password!')

            });
    }

    return (
        <>
            <C.FormContainer>
                <C.Form onSubmit={handleLogin} >
                    <C.Title>User login</C.Title>
                    <C.Label>User email</C.Label>
                    <C.Input type={'text'} placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={30} />
                    <PasswordInput value={password} onChange={handlePasswordChange} />
                    <C.Button type='submit'>To enter</C.Button>
                </C.Form>
            </C.FormContainer>
        </>
    )
}

export default AccountLogin;