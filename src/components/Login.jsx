import React, {useState} from 'react'
import firebase from 'firebase/app'
import '../firebaseConfig/config.js'

import 'firebase/auth'

import { Container, TextField, Button, Card, CardContent, CardHeader, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    txt:{marginBottom: theme.spacing(2)}
}))

export default function Login() {
    const classess = useStyle()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) =>{
        e.preventDefault()
        try {
            firebase.auth().signInWithEmailAndPassword(email,password).then(()=>console.log('signin Successfully')).catch(error=>console.error(error.message))
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Card variant="outlined" style={{margin: '1rem'}}>
                    <CardHeader title="Login" />
                    <CardContent>
                    <form onSubmit={login}>

                        <TextField
                        name="email"
                        type="email"
                        variant="outlined"
                        label="Email"
                        placeholder="Enter your email"
                        fullWidth 
                        className={classess.txt}
                        onChange={e=>setEmail(e.target.value)}/>

                    <TextField
                        name="password"
                        type="password"
                        variant="outlined"
                        label="Password"
                        placeholder="Enter your password"
                        fullWidth 
                        className={classess.txt}
                        onChange={e=>setPassword(e.target.value)}/>

                    <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
                    <Typography variant="overline">or Login using...</Typography>
                    <Button type="button" variant="contained" color="secondary" fullWidth>Google</Button>

                    </form>
                    </CardContent>
                </Card>       
            </Container>
        </div>
    )
}
