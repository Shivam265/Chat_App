import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUZZcW47dIxJPb5afK1BxUHSsQ6A21VFw",
  authDomain: "react-chat-app-5b9c7.firebaseapp.com",
  databaseURL: "https://react-chat-app-5b9c7-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-5b9c7",
  storageBucket: "react-chat-app-5b9c7.appspot.com",
  messagingSenderId: "629915068892",
  appId: "1:629915068892:web:181fcd6f57d8ebd4d54719",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
