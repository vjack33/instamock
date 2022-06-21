import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import AppRouter from './routes'
import './scss/custom.css'


const firebaseConfig = {
    apiKey: 'AIzaSyBiRO7eVpp16mCVr5Uvd6Dh5imh446WKcA',
    authDomain: 'instagram-mock-f4587.firebaseapp.com',
    projectId: 'instagram-mock-f4587',
    storageBucket: 'instagram-mock-f4587.appspot.com',
    messagingSenderId: '1000097233381',
    appId: '1:1000097233381:web:68e569b8322c56f517570c',
    measurementId: 'G-C2B342BDG2'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const firestoreDb = getFirestore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AppRouter/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
