import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBcaPyH3dM_Coba2FG-qDceKeKNtSCk6pg",
    authDomain: "sitesito.firebaseapp.com",
    projectId: "sitesito",
    storageBucket: "sitesito.firebasestorage.app",
    messagingSenderId: "86542823836",
    appId: "1:86542823836:web:ebdd482005ce7fc020d859"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// import * as Firestore from "./firebase-firestore.js";
// // https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js

// const banco = {

//     async addDoc(collection, data) {
//         return await Firestore.addDoc(Firestore.collection(db, collection), data);
//     },
//     async getDoc(collection, doc) {
//         return await Firestore.getDoc(Firestore.doc(Firestore.collection(db, collection), doc));
//     },
//     async setDoc(collection, doc, data) {
//         return await Firestore.setDoc(Firestore.doc(Firestore.collection(db, collection), doc), data);
//     },

// };