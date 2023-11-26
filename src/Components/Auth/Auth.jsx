import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../rdx/Firebase/firebase';
import { useNavigate } from "react-router-dom";
import { setName } from "../../rdx/Features/Tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";

const AuthProvider = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(useSelector((state) => state.userName));

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                dispatch(setName({ name: maybeUser.displayName }))
                // console.log('from auth', maybeUser)
                return setUser(maybeUser);
            }
            signInWithPopup(auth, googleAuthProvider)
                .then(credentials => setUser(credentials.user))
                .catch((e) => console.error(e));
        });


        return unsub;
    }, [auth, dispatch])


    return (user != null ?
        navigate('/tasks/') : <>loading...</>);
}

export default AuthProvider;