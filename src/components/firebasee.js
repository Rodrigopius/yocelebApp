import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBVj7yb7CQMbzDlEiES8MP0qpfQW-PTdIo",
  authDomain: "yoceleb-f24e7.firebaseapp.com",
  projectId: "yoceleb-f24e7",
  storageBucket: "yoceleb-f24e7.appspot.com",
  messagingSenderId: "940044217001",
  appId: "1:940044217001:web:e360a43a1f9ee979fed7b8",
  measurementId: "G-CYTM1WJFJK"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((results) => {
    const name = results.user.displayName;
    const email = results.user.email;
    const profilePic = results.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  }).catch((error) => {
    console.log(error);
  });
};



