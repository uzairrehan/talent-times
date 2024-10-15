import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDZ969QBIcswfoF73-9K2LTW7qnWZrbQsA",
  authDomain: "talent-times.firebaseapp.com",
  projectId: "talent-times",
  storageBucket: "talent-times.appspot.com",
  messagingSenderId: "163539492676",
  appId: "1:163539492676:web:ed61ffdfa26a6c88bb8111",
  measurementId: "G-XBB5G19F3L"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);