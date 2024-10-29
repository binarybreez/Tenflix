import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCDg4ThjB93G5ba6JFIz1hC_9JfchvvO2M",
    authDomain: "netflix-clone-92720.firebaseapp.com",
    projectId: "netflix-clone-92720",
    storageBucket: "netflix-clone-92720.appspot.com",
    messagingSenderId: "470909753702",
    appId: "1:470909753702:web:c03325e891757abe6510a7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, pass) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
};

const login = async (email, pass) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
};

const logout = () => {
    signOut(auth);
};

export {auth, db, login, signup, logout}