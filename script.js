
const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const montant = document.getElementById("montant").value;

    if (
        montant === "" ||
        !Number.isSafeInteger(Number(montant)) ||
        Number(montant) <= 0
    ) {
        alert("Veuillez entrer un nombre entier valide de FoxBytes.");
        return;
    }

    // AFFICHAGE DU MESSAGE PERSONNALISÉ

    const ecran = document.getElementById("messagePleinEcran");
    const texte = document.getElementById("texteMessage");

    // REMPLACE LE # PAR TON MESSAGE
    texte.textContent = "Merci pour nous avoir fait confiance. Si tout ce passe bien le temps que le SQL accède à ton compte et vous donne vos FoxBytes, vous obtiendrez dans la journée. Ne vous inquietez, vos informations son biensûr protéger par notre confidentialité. Merci et Au revoir!";

    ecran.style.display = "flex";

});

