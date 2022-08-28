import React from 'react'
import Container from './Container'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Login({ state, setState }) {

    function handleLogin() {
        setState(!state)
    }

    return (
        <Container>
            <h3>Login</h3>
            <TextField id="userName" label="UserName" variant="standard" fullWidth sx={{ marginBottom: 2 }} />
            <TextField id="password" type="password" label="Password" variant="standard" fullWidth />
            <Button onClick={handleLogin} fullWidth variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>LOGIN</Button>

        </Container>
    )
}
