import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../config/axios";

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

    return (

    )
};

export default Login;