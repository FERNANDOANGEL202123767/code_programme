import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJrqyXwycucjwaxTNIRwF2rd1uw8Dej1A",
  authDomain: "netflix-14ddb.firebaseapp.com",
  projectId: "netflix-14ddb",
  storageBucket: "netflix-14ddb.appspot.com",
  messagingSenderId: "418591333355",
  appId: "1:418591333355:web:cc32f3a9bea9f1fdb8d7ae",
  measurementId: "G-XGLVVLR1EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
