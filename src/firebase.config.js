import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"; 
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDfuXkwRxm8WET0RwBAG6QfIqFNzCqzNrM",
    authDomain: "delivery-app-46036.firebaseapp.com",
    databaseURL: "https://delivery-app-46036-default-rtdb.firebaseio.com",
    projectId: "delivery-app-46036",
    storageBucket: "delivery-app-46036.appspot.com",
    messagingSenderId: "920956616488",
    appId: "1:920956616488:web:88d94670cfa36288989a1d"
  };
  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

export {app, firestore, storage };
