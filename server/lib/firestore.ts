import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const queryByCollection = async (col: string) => {
  const colRef = collection(firestoreDb, col);
  const snapshot = await getDocs(colRef);

  return Array.from(snapshot.docs).map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

const colRefPosts = collection(firestoreDb, "posts");
onSnapshot(colRefPosts, (snapshot) => {
  const data = [];

  snapshot.docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
});

export const add = async (col: string, document: object) => {
  const colRef = collection(firestoreDb, "posts");
  addDoc(colRef, document);
};

export const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};
