
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const PasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
margin-top: 5px;
padding:5px;
color: teal;
font-size: 22px;
`;

const StyledInput = styled.input`
  width: 320px;
  padding: 11px;
  padding-left: 27px;
  font-size: 14px;
  border: 1px solid teal;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;

const EyeIcon = styled.div`
  position: absolute;
  font-size: 20px;
  top: 80%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: teal;
`;
const IconFalock = styled.div`
position: absolute;
font-size: 15px;
top: 75%;
left: 8px;
transform: translateY(-50%);
cursor: pointer;
color: teal;
`

const PasswordInput = ({ value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <PasswordInputContainer >
            <Label>Password</Label>
            <StyledInput
                type={showPassword ? 'text' : 'password'} placeholder="Password" value={value} onChange={onChange} />
            <IconFalock>
                <FaLock/>
            </IconFalock>
            <EyeIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
        </PasswordInputContainer>
    );
};

export default PasswordInput;