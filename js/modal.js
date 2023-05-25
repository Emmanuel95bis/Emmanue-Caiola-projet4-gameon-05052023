
//pointer l'input pour la récupération de la valeur
const prenomInput = document.getElementById("lbfirst");
const nomInput = document.getElementById("lblast");
const emailInput = document.getElementById("lbemail");
const birthdayInput = document.getElementById("birthdate");
const nbtInput = document.getElementById("lbquantity");
const conditionInput = document.getElementById("checkbox1");

//pointer le span correspondant pour éventuellement l'affichage de l'erreur
const prenomError = document.getElementById("lbfirst-error");
const nomError = document.getElementById("lblast-error");
const emailError = document.getElementById("lbemail-error");
const birthdayError = document.getElementById("lbbirthdate-error");
const nbtError = document.getElementById("lbquantity-error");
const conditionError = document.getElementById("condition-error");

//tableau des erreurs de saisie
Erreurs = [];

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCse = document.querySelector(".close");
const confirmationCse = document.getElementById("confirmcse");
const confirmBtn = document.querySelector(".buttonfin");

const confirmInscription = document.querySelector(".confirmation");

//fonction de validation adresse email
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(email);
}

//attente validation formulaire
reserve.addEventListener("submit", (e) => {
  e.preventDefault();
  validationForm();
  //si le tableau Erreurs ne comporte pas d'erreurs
  if (Erreurs.length === 0) {
    modalbg.style.display = "none";
    confirmInscription.style.display = "block";
    //si le tableau Erreurs comporte une ou plusieurs erreurs  
  } else {
    Erreurs.forEach(element => element.style.display = "block");
  }
});

[lbfirst, lblast, lbemail, birthdate, lbquantity, checkbox1].forEach((input) =>
  input.addEventListener("input", secondeSaisie)
)

// Affiche une classe succes sur l'input concerné
function secondeSaisie(e) {

  if (e.target.id == "lbfirst") prenomError.style.display = "none";
  if (e.target.id == "lblast") nomError.style.display = "none";
  if (e.target.id == "lbemail") emailError.style.display = "none";
  if (e.target.id == "birthdate") birthdayError.style.display = "none";
  if (e.target.id == "lbquantity") nbtError.style.display = "none";
  if (e.target.id == "checkbox1") conditionError.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCse.addEventListener("click", closeModal);

//attente évènement pour validation de fenêtre de confirmation
confirmBtn.addEventListener("click", validationConfirmation);

//attente évènement pour fermeture de fenêtre de confirmation
confirmationCse.addEventListener("click", closeConfirmation);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close fenêtre de confirmation
function closeConfirmation() {
  confirmInscription.style.display = "none";
}

//valide la fenêtre de confirmation
function validationConfirmation() {
  confirmInscription.style.display = "none";
}

function validationForm() {
  const prenom = prenomInput.value.trim();
  const nom = nomInput.value.trim();
  const email = emailInput.value.trim();
  const nbt = nbtInput.value.trim();
  Erreurs = [];
  if (prenom.length < 2) Erreurs.push(prenomError);
  if (nom.length < 2) Erreurs.push(nomError);
  if (checkEmail(email) == false) Erreurs.push(emailError);
  if (birthdayInput.value == '') Erreurs.push(birthdayError);
  if ((nbt == '') || (isNaN(nbt))) Erreurs.push(nbtError);
  if (conditionInput.checked == false) Erreurs.push(conditionError);
  return Erreurs;
}
