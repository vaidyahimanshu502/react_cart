import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import App1 from './components/testing_component';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfFIzRqvC0Qzd-6IQ1MXhLJeeiLlKQ1-w",
  authDomain: "cart-eb5d1.firebaseapp.com",
  projectId: "cart-eb5d1",
  storageBucket: "cart-eb5d1.appspot.com",
  messagingSenderId: "555505279655",
  appId: "1:555505279655:web:896bc95875723fd3c53182",
  measurementId: "G-QB04R9FQS5"
};

// Initialize Firebas
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <App1 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// maxProfit = 0;
// minPrice = Integer.MAX_VALUE;

// for(int i = 0; i<navigator; i++){
//   minPrice = Math>min(minPrice, a[i]);
//   maxProfit = Math.max(maxProfit, a[i]-minPrice)
// }
// return maxProfit;