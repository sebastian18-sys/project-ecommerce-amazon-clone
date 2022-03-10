import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD5KknHjswaoAe2hHjhe61uIwXeNZKTYH0",
    authDomain: "clone-2d1fc.firebaseapp.com",
    projectId: "clone-2d1fc",
    storageBucket: "clone-2d1fc.appspot.com",
    messagingSenderId: "305096632779",
    appId: "1:305096632779:web:fefe3be808bb260f9e2e4e",
    measurementId: "G-8PG7SCHBW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
