// Définition de la date de fin du compte à rebours (format universel)
let endtime = "June 01, 2030 18:00:00";  

// Récupération de l'élément HTML qui affichera la date de fin
var enddate = document.getElementById("enddate");

// Sélection de tous les éléments <input> pour afficher les jours, heures, minutes, secondes
let inputs = document.querySelectorAll("input");

// Affichage de la date de fin dans l'élément HTML 'enddate'
enddate.innerText = endtime;

// Fonction qui met à jour le compte à rebours chaque seconde
function clock() {
  // Obtenir la date actuelle
  const NOW = new Date();
  
  // Convertir la date de fin en objet Date
  const END = new Date(endtime);
  
  // Calculer la différence en secondes entre la date de fin et la date actuelle
  const diff = (END - NOW) / 1000;

  // Vérification si la date de fin est passée
  if (diff < 0) {
    // Si le compte à rebours est terminé, mettre tous les inputs à 0
    inputs[0].value = 0;  // Jours
    inputs[1].value = 0;  // Heures
    inputs[2].value = 0;  // Minutes
    inputs[3].value = 0;  // Secondes
    return;  // On arrête ici pour éviter de compter à l'envers
  }

  // Convertir la différence en jours et mettre à jour le premier input
  let days = Math.floor(diff / (24 * 3600));
  inputs[0].value = days;

  // Convertir la différence restante en heures et mettre à jour le deuxième input
  let hours = Math.floor((diff % (24 * 3600)) / 3600);
  inputs[1].value = hours;

  // Convertir la différence restante en minutes et mettre à jour le troisième input
  let minutes = Math.floor((diff % 3600) / 60);
  inputs[2].value = minutes;

  // Convertir la différence restante en secondes et mettre à jour le quatrième input
  let secondes = Math.floor(diff % 60);
  inputs[3].value = secondes;

  // Afficher la différence restante en secondes dans la console (utile pour le débogage)
  console.log(diff);
}

// Appeler la fonction clock toutes les 1000 millisecondes (1 seconde)
setInterval(clock, 1000);
