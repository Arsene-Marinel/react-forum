import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI22fYAu3pEiJ-nboWQktsO-rN7JKsMpA",
  authDomain: "react-forum-f5020.firebaseapp.com",
  projectId: "react-forum-f5020",
  storageBucket: "react-forum-f5020.appspot.com",
  messagingSenderId: "866803741752",
  appId: "1:866803741752:web:813c29fc4ddc7fb35d22cd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
