import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCrAlZzf98Deg2l6KniHhTfDgCyaqc5o_I",
  authDomain: "personal-portfolio-d8ab6.firebaseapp.com",
  projectId: "personal-portfolio-d8ab6",
  storageBucket: "personal-portfolio-d8ab6.appspot.com",
  messagingSenderId: "940253288535",
  appId: "1:940253288535:web:b7b48b0230f1faf9ca2b12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export default storage;
