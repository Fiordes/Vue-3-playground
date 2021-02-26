import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDC7SLMUyxMzOvlawSJQDWisK6JnuBYc3U",
  authDomain: "vue3-my-course.firebaseapp.com",
  projectId: "vue3-my-course",
  storageBucket: "vue3-my-course.appspot.com",
  messagingSenderId: "805875686501",
  appId: "1:805875686501:web:ad7ebd1a8c16c3572d3a8c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
