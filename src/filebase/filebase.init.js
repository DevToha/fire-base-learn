// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNEr97a3q0DjYLhXVfivpb0D8iFMQDI44",
    authDomain: "fir-learn-e2f14.firebaseapp.com",
    projectId: "fir-learn-e2f14",
    storageBucket: "fir-learn-e2f14.appspot.com",
    messagingSenderId: "500461371570",
    appId: "1:500461371570:web:3daf25c05b122a984309ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app