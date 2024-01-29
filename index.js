import { prompt } from "./prompt.js";

const nombreAleatoire = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const afficherMessageBienvenue = () => {
  console.log(`
Bienvenue au jeu de devinette !

Le but du jeu est de trouver le nombre magique.
Ce nombre est entre 0 et 100.
La partie continue jusqu'à ce que vous trouviez le nombre correct.

***************************************
*                                     *
*         Bonne Chance !!!!!          *
*                                     *
***************************************
`);
};

let compteur = 0;
const playGuessingGame = (nombreChoisiParSystheme) => {
  compteur += 1;

  const reponseUtilisateur = Number(
    prompt("Devinez le nombre magique (entre 0 et 100) : ")
  );

  if (reponseUtilisateur > nombreChoisiParSystheme) {
    console.log(`Le nombre entré est trop grand !!`);
    playGuessingGame(nombreChoisiParSystheme);
  } else if (reponseUtilisateur < nombreChoisiParSystheme) {
    console.log(`Le nombre entré est trop petit !!`);
    playGuessingGame(nombreChoisiParSystheme);
  } else {
    console.log(`
  Bravo ! Le nombre aléatoire est bien ${nombreChoisiParSystheme}.
  Vous l'avez trouvé en ${compteur} tentative(s).
  `);

    reJouerJeux();
  }
};

const reJouerJeux = () => {
  const restart = prompt("Voulez-vous rejouer le jeu ? (y/n) ");

  if (restart === "y") {
    const nombreChoisiParSystheme = nombreAleatoire(0, 100);
    compteur = 0;
    playGuessingGame(nombreChoisiParSystheme);
  } else if (restart === "n") {
    console.log("Merci d'avoir joué à notre jeu de devinette !");
  } else {
    console.log("Votre réponse est invalide. Entrez une réponse entre y et n.");
    reJouerJeux();
  }
};

afficherMessageBienvenue();
const nombreChoisiParSystheme = nombreAleatoire(0, 100);
playGuessingGame(nombreChoisiParSystheme);
