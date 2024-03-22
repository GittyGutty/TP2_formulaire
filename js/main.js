// Definir les variables
const REF_CHAMP_PRENOM = document.getElementById('prenom-compte')
const REF_ERREUR_PRENOM = document.getElementById('prenom-compte-erreur')
const REF_CHAMP_NOM = document.getElementById('nom-compte')
const REF_ERREUR_NOM = document.getElementById('nom-compte-erreur')

const REF_CHAMP_EMAIL = document.getElementById('email-compte')
const REF_CHAMP_EMAIL_REQUIS = document.getElementById('emailMsgErreur')
const REF_CHAMP_EMAIL_INVALIDE = document.getElementById('emailMsgInvalide')

const REF_CHAMP_MOT_DE_PASSE = document.getElementById('password-compte')
const REF_CHAMP_MP_REQUIS = document.getElementById('mpMsgErreur')
const REF_CHAMP_MP_INVALIDE = document.getElementById('mpMsgInvalide')

const REF_CHAMP_CONFIRMATION_MOT_DE_PASSE = document.getElementById('password-confirmation')
const REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_REQUIS = document.getElementById('mpConfirmationMsgErreur')
const REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_INVALIDE = document.getElementById('mpConfirmationMsgInvalide')
const REF_CHAMP_INPUT = document.querySelector('champ-saisie')


// Déclarations des écouteurs d'évenements
REF_CHAMP_PRENOM.addEventListener('blur', validerChampText)
REF_CHAMP_NOM.addEventListener('blur', validerChampText)
REF_CHAMP_EMAIL.addEventListener('blur', validerChampEmail)
REF_CHAMP_MOT_DE_PASSE.addEventListener('blur', validerChampMotDePasse)
REF_CHAMP_MOT_DE_PASSE.addEventListener('focus', afficherLeMotDePasse)
REF_CHAMP_MOT_DE_PASSE.addEventListener('keyup', validerLeMotDePasse)
REF_CHAMP_CONFIRMATION_MOT_DE_PASSE.addEventListener('blur', validerConfirmationMotDePasse)

// Création des fonctions
function validerChampText(evenement) {
    let strChampText = evenement.currentTarget;
    console.log(strChampText.id)
    console.log(objMessagesErreur[strChampText.id].vide)
    // Si le champ est vide, ajouter la classe du message d'erreur
    if (strChampText.value == "") {
        document.getElementById(strChampText.id + '-erreur').classList.add('erreur')
        document.getElementById(strChampText.id + '-erreur').innerText = `${objMessagesErreur[strChampText.id].vide}`
    }
    // Sinon enlever la classe
    else {
        if (strChampText.value.charAt(0) !== strChampText.value.charAt(0).toUpperCase()) {
            document.getElementById(strChampText.id + '-erreur').classList.add('erreur')
            document.getElementById(strChampText.id + '-erreur').innerText = `${objMessagesErreur[strChampText.id].nomPropre}`
        }
        else {
            document.getElementById(strChampText.id + '-erreur').classList.remove('erreur')
        }
    }
}

function validerChampEmail() {
    const REGEX_EMAIL = new RegExp(`^${this.pattern}$`)
    let strChampEmail = REF_CHAMP_EMAIL.value
    console.log(`${objMessagesErreur["email-compte"].vide}`)
    // Si le champ est vide, ajouter la classe du message d'erreur
    if (REF_CHAMP_EMAIL.value == "") {
        REF_CHAMP_EMAIL_REQUIS.classList.add('erreur')
        REF_CHAMP_EMAIL_REQUIS.innerText = `${objMessagesErreur["email-compte"].vide}`
    }
    // Sinon retirer la classe
    else {
        REF_CHAMP_EMAIL_REQUIS.innerText = ""
        // Si l'adresse entrée n'est pas conforme ajouter la classe erreur
        if (!REGEX_EMAIL.test(strChampEmail)) {
            REF_CHAMP_EMAIL_INVALIDE.classList.add('erreur')
            REF_CHAMP_EMAIL_INVALIDE.innerText = `${objMessagesErreur["email-compte"].validation}`
        }
        // Si l'adresse entrée est conforme enlever la classe erreur
        else {
            REF_CHAMP_EMAIL_INVALIDE.classList.remove('erreur')
        }
    }

}
function afficherLeMotDePasse() {
    document.querySelector('.cacher').classList.add('retroaction')
}

function validerChampMotDePasse() {
    const REGEX_MOT_DE_PASSE= new RegExp(`^${this.pattern}$`);
    let strChampMotDePasse = REF_CHAMP_MOT_DE_PASSE.value;
    // Si le champ du mot de passe est vide ajouter la classe erreur
    if (strChampMotDePasse == "") {
        REF_CHAMP_MP_REQUIS.classList.add('erreur')
        REF_CHAMP_MP_REQUIS.innerText = `${objMessagesErreur["password-compte"].vide}`

    }
    // Sinon retirer la classe
    else {
        REF_CHAMP_MP_REQUIS.classList.remove('erreur')
        // Si le mot de passe n'est pas conforme ajouter la classe erreur
        if (!REGEX_MOT_DE_PASSE.test(strChampMotDePasse)) {
            REF_CHAMP_MP_INVALIDE.classList.add('erreur')
            REF_CHAMP_MP_INVALIDE.innerText = `${objMessagesErreur["password-compte"].validation}`
        }
        // Si le mot de passe est conforme enlever la classe erreur
        else {
            REF_CHAMP_MP_INVALIDE.classList.remove('erreur')
        }
    }

}

function validerConfirmationMotDePasse() {
    let strChampConfirmationMotDePasse = REF_CHAMP_CONFIRMATION_MOT_DE_PASSE.value;
    // Si le champ du mot de passe est vide ajouter la classe erreur
    if (strChampConfirmationMotDePasse == "") {
        REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_REQUIS.classList.add('erreur')
        REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_REQUIS.innerText = `${objMessagesErreur["password-confirmation"].vide}`

    }
    // Sinon retirer la classe
    else {
        REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_REQUIS.classList.remove('erreur')
        // Si le mot de passe n'est pas conforme ajouter la classe erreur
        if (REF_CHAMP_CONFIRMATION_MOT_DE_PASSE.value !== REF_CHAMP_MOT_DE_PASSE.value) {
            console.log(REF_CHAMP_MOT_DE_PASSE.value)
            REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_INVALIDE.classList.add('erreur')
            REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_INVALIDE.innerText = `${objMessagesErreur["password-confirmation"].validation}`
        }
        // Si le mot de passe est conforme enlever la classe erreur
        else {
            REF_CHAMP_CONFIRMATION_MOT_DE_PASSE_INVALIDE.classList.remove('erreur')
        }
    }
}

function validerLeMotDePasse() {
    let intForceDuMotDePasse = 0;
    let strMessageForceMp = "";

    // Vérificatiion de la présence d'une lettre minuscule
    let strMinuscule = /[a-z]+/g;
    let strMotDansLeChamp = REF_CHAMP_MOT_DE_PASSE.value
    // Si une lettre minuscule est entrée, ajouter la classe correct
    if (strMotDansLeChamp.match(strMinuscule)) {
        document.getElementById('lettre-minuscule').classList.add('correct')
        intForceDuMotDePasse++
    }
    // Sinon, retirer la classe valide
    else {
        document.getElementById('lettre-minuscule').classList.remove('correct')
    }

    // Vérificatiion de la présence d'une lettre majuscule
    let strMajuscule = /[A-Z]+/g;
    // Si une lettre majuscule est entrée, ajouter la classe correct
    if (strMotDansLeChamp.match(strMajuscule)) {
        document.getElementById('lettre-majuscule').classList.add('correct')
        intForceDuMotDePasse++
    }
    // Sinon, retirer la classe valide
    else {
        document.getElementById('lettre-majuscule').classList.remove('correct')
    }

    // Vérificatiion de la présence d'un chiffre
    let intNombreEntre = /\d+/g;
    // Si une lettre majuscule est entrée, ajouter la classe correct
    if (strMotDansLeChamp.match(intNombreEntre)) {
        document.getElementById('chiffre').classList.add('correct')
        intForceDuMotDePasse++
    }
    // Sinon, retirer la classe valide
    else {
        document.getElementById('chiffre').classList.remove('correct')
    }

    // Vérificatiion de la présence la longueur minimal du mot de passe
    // Si la longueur du mot de passe est supérieur à 8, ajouter la classe valide
    if (strMotDansLeChamp.length > 8) {
        document.getElementById('nombre-caractere').classList.add('correct')
        intForceDuMotDePasse++
    }
    // Sinon, retirer la classe valide
    else {
        document.getElementById('nombre-caractere').classList.remove('correct')
    }

    // Vérificatiion de la présence la longueur maximal du mot de passe
    // Si la longueur du mot de passe est supérieur à 8, ajouter la classe valide
    if (strMotDansLeChamp.length < 25) {
        document.getElementById('caractere_max').classList.add('correct')
        intForceDuMotDePasse++
    }
    // Sinon, retirer la classe valide
    else {
        document.getElementById('caractere_max').classList.remove('correct')
    }

    // Vérificatiion de la présence d'un caractère spécial
    let intCaractereSpeciaux = /\W+/g;
    // Si une lettre majuscule est entrée, ajouter la classe valide
    if (strMotDansLeChamp.match(intCaractereSpeciaux)) {
        document.getElementById('caractere-special').classList.add('correct')
        intForceDuMotDePasse++
    }
    // Sinon, retirer la classe valide
    else {
        document.getElementById('caractere-special').classList.remove('correct')
    }
    // Vérification de la force du mot de passe
    // Si la force du mot de passe est inférieur ou égale à 3, le message affichera "Mot de passe faible"
    if (intForceDuMotDePasse <= 3) {
        document.getElementById('force-mot-passe').classList.add('erreur')
        strMessageForceMp = `${objMessagesErreur["force-mot-passe"].faible}`
        document.getElementById('force-mot-passe').classList.remove('force-moyenne')
        document.getElementById('force-mot-passe').classList.remove('force-elevee')
    }
    // Sinon si la force du mot de passe est inférieur ou égale à 3 et inférieur à 6, le message affichera "Le mot de passe peut être améliorer"
    else if (intForceDuMotDePasse >= 4 && intForceDuMotDePasse < 6) {
        strMessageForceMp = `${objMessagesErreur["force-mot-passe"].moyen}`
        document.getElementById('force-mot-passe').classList.add('force-moyenne')
        document.getElementById('force-mot-passe').classList.remove('erreur')
        document.getElementById('force-mot-passe').classList.remove('force-elevee')
    }
    // Sinon le message affichera "Le mot de passe est difficile à deviner"
    else {
        strMessageForceMp = `${objMessagesErreur["force-mot-passe"].fort}`
        document.getElementById('force-mot-passe').classList.remove('erreur')
        document.getElementById('force-mot-passe').classList.remove('force-moyenne')
        document.getElementById('force-mot-passe').classList.add('force-elevee')
    }
    document.getElementById('force-mot-passe').innerText = strMessageForceMp
}


