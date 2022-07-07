// https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(credentials);
  return credentials;
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password);
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();

  onAuthStateChanged(auth, (user) => {
    firebaseUser.value = user;
  });
};

export const signOut = async () => {
  const auth = getAuth();
  return await auth.signOut();
};
