// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVCR9ODFMDPwC0mOBsbLslCDBVpAdzs6c",
    authDomain: "netflix-clone-8408f.firebaseapp.com",
    projectId: "netflix-clone-8408f",
    storageBucket: "netflix-clone-8408f.appspot.com",
    messagingSenderId: "514979438724",
    appId: "1:514979438724:web:0ccb612c2404157f4862d1"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }