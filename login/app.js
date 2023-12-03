import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getAuth ,
signInWithEmailAndPassword

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

document.getElementById('submitted').addEventListener("submit",(e)=>{
   e.preventDefault();
    let email=document.getElementById("username")
    let password=document.getElementById("password")
    
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    const user = userCredential.user;
    alert("login successfully",user)
  })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error===>>>",errorCode,errorMessage)
});
});

