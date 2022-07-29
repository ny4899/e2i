import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhI5oID1Ee9XJ3doT6kCYmaoy0DX2pHyk",
  authDomain: "envirozone-2a268.firebaseapp.com",
  databaseURL: "https://envirozone-2a268-default-rtdb.firebaseio.com",
  projectId: "envirozone-2a268",
  storageBucket: "envirozone-2a268.appspot.com",
  messagingSenderId: "823470554881",
  appId: "1:823470554881:web:dda8288ba22d78386f6500",
  measurementId: "G-G0H2EZ7ZSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.database()
export {database}