import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPqIi1GpDlJxx_oMP2N9eeUyiDWLzsF3A",
    authDomain: "reactpracticewehelp.firebaseapp.com",
    projectId: "reactpracticewehelp",
    storageBucket: "reactpracticewehelp.appspot.com",
    messagingSenderId: "368828982385",
    appId: "1:368828982385:web:a44f8f5ab7408623df67d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();