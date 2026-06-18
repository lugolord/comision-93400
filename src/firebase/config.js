import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyC8B571y08GjrgcK0EET94c_tvb0VofWAA",
  authDomain: "mercatto-db.firebaseapp.com",
  projectId: "mercatto-db",
  storageBucket: "mercatto-db.firebasestorage.app",
  messagingSenderId: "1094713577768",
  appId: "1:1094713577768:web:6353bac6ba0ef1f514c01d",
  measurementId: "G-RP3WEBSXWD"
}

export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)