import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Please add firebase config from firebase project settings

const firebaseConfig = {
  apiKey: "API Key from firebase",
  authDomain: "Auth Domain from firebase",
  projectId: "ProjectID from firebase",
  storageBucket: "Storage Bucket from firebase",
  messagingSenderId: "Messaging sender id from firebase",
  appId: "App Id from firebase",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };

export default db;
