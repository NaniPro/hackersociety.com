// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcVJaQ9phZKuR8yFNHd0A_doK3IHVErE0",
    authDomain: "hackersociety-2c3d6.firebaseapp.com",
    projectId: "hackersociety-2c3d6",
    storageBucket: "hackersociety-2c3d6.appspot.com",
    messagingSenderId: "127288511511",
    appId: "1:127288511511:web:1f528b439e650c2d6d2052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('Creating Account...')
            window.location.href = "lobby.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });


})