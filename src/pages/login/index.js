import { Container } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../config/axios";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { TextField } from "@mui/material";

function Login() {
    const nis = useSelector((state) => state.auth.nis);
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        nis: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const onLogin = async () => {
        try {
            const res = await axios.post("/users/login", {
                nis: formState.nis,
                password: formState.password
            });

            const user = res.data
            const action = loginAction(user)
            dispatch(action)
        } catch (error) {
            console.log({error})
        }
    };

    const onLoginClick = () => {
        onLogin();
    };

    const onInputPress = (e) => {
        if (e.code === "Enter") onLogin();
    };

    return (
        <Container
            sx={{
                width: 500,
                height: 500,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 4
            }}>
                <Box
                    sx={{
                        color: "black",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,

                        paddingTop: 4,
                    }}>Login to your account here!
                </Box>
                <Container
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        backgroundColor: "white",
                        paddingTop: 2,
                    }}>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        name="username" // reference ke onLoginClick
                        onChange={handleChange}
                        onKeyPress={onInputPress}   
                        sx={{
                            p: 1,
                            m: 1,
                        }}
                    />
                    <TextField 
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        name="password" // reference ke onLoginClick
                        type="password"
                        onChange={handleChange}
                        onKeyPress={onInputPress}
                        sx={{
                            p: 1,
                            m: 1,
                        }}
                    />
                    <Container
                        sx={{
                            marginTop: 3,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <Button 
                            variant="contained"
                            color="success"
                            onClick={onLoginClick}
                        >Login
                        </Button>
                    </Container>
                </Container>
            </Container>
    )
};

export default Login;