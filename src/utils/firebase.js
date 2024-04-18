// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  authDomain: "netflix-ff36e.firebaseapp.com",
  projectId: "netflix-ff36e",
  storageBucket: "netflix-ff36e.appspot.com",
  messagingSenderId: "1036785299467",
  appId: "1:1036785299467:web:7bccca9cbf8ecb6cdb970e",
  measurementId: "G-JQ14THMTPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();