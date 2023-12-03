import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6oMeNwkP0ARZrM_eU3zl6YjQvgUxXzP8",
    authDomain: "todo--app-c4dce.firebaseapp.com",
    projectId: "todo--app-c4dce",
    storageBucket: "todo--app-c4dce.appspot.com",
    messagingSenderId: "19494461043",
    appId: "1:19494461043:web:26579034b9eb5c2482d406",
    measurementId: "G-FL02EVVF4W"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('submitted').addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById("username")
    let password = document.getElementById("password")

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("sign up  successfully", user)
            window.location.href = "./login/login.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error==>>>", errorCode);
            console.log("error==>>>", errorMessage);

        });
})

document.getElementById('google').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user , token);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email; // Use error.email to access the email
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error);
        });
});




