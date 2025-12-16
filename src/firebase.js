import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "PASTEAZA_AICI",
  authDomain: "PASTEAZA_AICI",
  projectId: "PASTEAZA_AICI",
  storageBucket: "PASTEAZA_AICI",
  messagingSenderId: "PASTEAZA_AICI",
  appId: "PASTEAZA_AICI",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
