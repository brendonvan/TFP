import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBCGI0hX6f7Fx-eMEWUf4mFTqYdeuZVy3M",
    authDomain: "tfp--demo.firebaseapp.com",
    projectId: "tfp--demo",
    storageBucket: "tfp--demo.appspot.com",
    messagingSenderId: "965669521131",
    appId: "1:965669521131:web:0943bcd1a5f82a8a99e0ae",
    measurementId: "G-ESDRJ36CV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers(db) {

}