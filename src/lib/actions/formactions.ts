import { db } from "../firebase/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ContactFormData } from "../validator/formValidator";

export async function submitContactForm(data: ContactFormData) {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            ...data,
            createdAt: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Erro ao enviar o formulário de contato:", error);
        return false;
    }
}