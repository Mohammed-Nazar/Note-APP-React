import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWLPUPrO9EwtHXvY4Ep9zoRO0TtFI4TJs",
  authDomain: "note-app-91878.firebaseapp.com",
  projectId: "note-app-91878",
  storageBucket: "note-app-91878.appspot.com",
  messagingSenderId: "542041199757",
  appId: "1:542041199757:web:21a984341d7b1d52243ec4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
