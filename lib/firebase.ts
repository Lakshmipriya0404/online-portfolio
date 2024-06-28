import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { FirebaseData } from "@/lib/types";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebaseCollection = collection(db, "data");
export const fetchFirebaseDocs = async (): Promise<FirebaseData> => {
  try {
    const snapshot = await getDocs(firebaseCollection);
    return snapshot.docs.map((doc) => doc.data() as FirebaseData[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
