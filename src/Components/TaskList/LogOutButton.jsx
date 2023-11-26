import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../rdx/Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../../rdx/Features/Tasks/Tasks';
import { Button } from '@mui/material';

const LogoutButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(setName({ name: '' }));
                navigate("/");
                console.log("Signed out successfully")
            }).catch((error) => {
                console.error(error);
            });
    }



    return (
        <button className='CreateTaskButton margin' onClick={handleLogout}>
            Log out
        </button>
    );
};

export default LogoutButton;