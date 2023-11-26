import {
    initializeApp
} from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth
} from "firebase/auth";


// const API_KEY =
//     import.meta.env.VITE_API_KEY;
// const AUTH_DOMAIN =
//     import.meta.env.VITE_AUTH_DOMAIN;
// const PROJECT_ID =
//     import.meta.env.VITE_PROJECT_ID;
// const STORAGE_BUCKET =
//     import.meta.env.VITE_STORAGE_BUCKET;
// const MESSAGING_SENDER_ID =
//     import.meta.env.VITE_MESSAGING_SENDER_ID;
// const APP_ID =
//     import.meta.env.VITE_APP_ID;
// const MEASUREMENT_ID =
//     import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
    apiKey: 'AIzaSyB9aN09cdP--m_NX7BRmL_heSDwI26utOA',
    authDomain: 'silver-tasks.firebaseapp.com',
    projectId: 'silver-tasks',
    storageBucket: 'silver-tasks.appspot.com',
    messagingSenderId: '873224296775',
    appId: '1:873224296775:web:04daa506f2a83a8a711462',
    measurementId: 'G-69EWCNZF6W'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();