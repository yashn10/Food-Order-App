import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usercontext } from '../App';

const Logout = () => {

    const { state, dispatch } = useContext(Usercontext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:7000/logout", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            if (res.status === 201) {
                console.log("User logout successfully");
                window.alert("User logout successfully");
                dispatch({ type: 'USER', payload: false });
                navigate('/');
            } else {
                console.error("error");
                window.alert("Error occurs");
            }
        }).catch((error) => {
            console.log("error", error);
        });
    })

    return (

        <div>logout</div>

    )

}

export default Logout
