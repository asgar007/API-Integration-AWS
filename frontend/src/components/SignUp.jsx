import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../service/api';

const initialValue = {
    username: '',
    email: '',
    password: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const SignUp = () => {
    const [user, setUser] = useState(initialValue);
    const { username, email, password } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const Register = async() => {
        try {
            await signUp(user);
            navigate('/signin');
        } catch (error) {
            console.log('Error while Sigup', error);
        }
    }

    return (
        <Container>
            <Typography variant="h4">Sign up User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => Register()}>Sign Up</Button> <br />
                <Button variant="contained" color="secondary" onClick={() => navigate('/signin')}>Already have Account</Button>
            </FormControl>
        </Container>
    )
}

export default SignUp;