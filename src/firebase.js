import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuwOHFqR0w8u7viucKsujk_eMA9saIVgY",
  authDomain: "women-safety-app-e0669.firebaseapp.com",
  projectId: "women-safety-app-e0669",
  storageBucket: "women-safety-app-e0669.appspot.com",
  messagingSenderId: "905482712624",
  appId: "1:905482712624:web:37a2afe6d4a7949092dff5",
  measurementId: "G-VPHXMK9ZDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
