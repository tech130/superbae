import { initializeApp, getApps } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDx8wraWsWouywV_uBXMboQa-uowKUzWdM",
    authDomain: "superbae-1.firebaseapp.com",
    projectId: "superbae-1",
    storageBucket: "superbae-1.firebasestorage.app",
    messagingSenderId: "131257972942",
    appId: "1:131257972942:web:bab53918983da74284389f",
    measurementId: "G-N5BLNDVB3V",
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
