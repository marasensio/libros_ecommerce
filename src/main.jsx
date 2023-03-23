import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkBr2UyXdjpcFx_VDvHFhL9-xEnBDk7lA",
  authDomain: "libros-ecommerce.firebaseapp.com",
  projectId: "libros-ecommerce",
  storageBucket: "libros-ecommerce.appspot.com",
  messagingSenderId: "1078492479550",
  appId: "1:1078492479550:web:1e6fe72e043f30492d916f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
