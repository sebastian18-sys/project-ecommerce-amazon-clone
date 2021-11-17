// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);