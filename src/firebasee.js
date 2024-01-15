
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {

  apiKey: "AIzaSyAmebHe3c4oJDPXdUfwTt9TiA-ObkZ_KeQ",
  authDomain: "yoceleb-auth.firebaseapp.com",
  projectId: "yoceleb-auth",
  storageBucket: "yoceleb-auth.appspot.com",
  messagingSenderId: "91829231078",
  appId: "1:91829231078:web:714c70c5612e0d3329ca27",
  measurementId: "G-W24XT0L05Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>{
signInWithPopup(auth, provider).then((results)=>{
  const name = results.user.displayName;
  const email = results.user.email;
  const profilePic = results.user.photoURL;

  localStorage.setItem("name",name)
  localStorage.setItem("email",email)
  localStorage.setItem("profilePic",profilePic)
  

}).catch((error) =>{

    console.log(error);
})
};