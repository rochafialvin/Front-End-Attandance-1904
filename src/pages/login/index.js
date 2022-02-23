
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../config/axios";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { TextField, Typography } from "@mui/material";

import { loginAction } from "../../store/actions";
import { fontSize } from "@mui/system";

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
                height: 400,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 4,
                boxShadow: 3
            }}>
                <Box
                    sx={{
                        color: "black",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 25,
                        paddingTop: 4,
                        marginBottom: 2
                    }}>
                        Login to your account here!
                </Box>
                <Container
                    sx={{
                        width: 350,

                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        backgroundColor: "white",
                        paddingTop: 2,
                    }}>
                    <Container
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            marginBottom: -1
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontSize: 19,
                            }}>
                            NIS
                        </Typography>
                    </Container>
                    <TextField
                        id="filled-search"
                        variant="outlined"
                        name="nis" // reference ke onLoginClick
                        onChange={handleChange}
                        onKeyPress={onInputPress}   
                        sx={{
                            p: 1,
                            m: 1,
                            width: "100%"
                        }}
                    />
                    <Container
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            marginBottom: -1
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontSize: 19,
                            }}>
                            Password
                        </Typography>
                    </Container>
                    <TextField 
                        id="outlined-password-input"
                        name="password" // reference ke onLoginClick
                        type="password"
                        onChange={handleChange}
                        onKeyPress={onInputPress}
                        sx={{
                            p: 1,
                            m: 1,
                            width: "100%"
                        }}
                    />
                    <Container
                        sx={{
                            marginTop: 1,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onLoginClick}
                            sx={{
                                width: "100%",
                                paddingInline: 17
                            }}
                        >Login
                        </Button>
                    </Container>
                </Container>
            </Container>
    )
};

export default Login;