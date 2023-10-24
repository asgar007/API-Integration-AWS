import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { validateUser, signUp } from '../service/api';

const initialValue = {
    email: '',
    password: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const SignIn = () => {
    const [user, setUser] = useState(initialValue);
    const { email, password } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const login = async() => {
        try {
            await validateUser(user);
            navigate('/dashboard');
        } catch (error) {
            console.log('Error while SignIn', error);
            alert(error.response.data.message)
        }
    }

    return (
        <Container>
            <Typography variant="h4">Sign in User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => login()}>Sign In</Button> <br />
                <Button variant="contained" color="secondary" onClick={() => navigate('/signup')}>Don't have Account?</Button>
            </FormControl>
        </Container>
    )
}

export default SignIn;