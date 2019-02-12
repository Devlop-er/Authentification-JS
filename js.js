
//  /$$$$$$$$                                         /$$                    
// | $$_____/                                        |__/                    
// | $$       /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$  /$$$$$$$  /$$$$$$ 
// | $$$$$   |  $$ /$$/ /$$__  $$ /$$__  $$ /$$_____/| $$ /$$_____/ /$$__  $$
// | $$__/    \  $$$$/ | $$$$$$$$| $$  \__/| $$      | $$| $$      | $$$$$$$$
// | $$        >$$  $$ | $$_____/| $$      | $$      | $$| $$      | $$_____/
// | $$$$$$$$ /$$/\  $$|  $$$$$$$| $$      |  $$$$$$$| $$|  $$$$$$$|  $$$$$$$
// |________/|__/  \__/ \_______/|__/       \_______/|__/ \_______/ \_______/


// Authentification & Conditions

// Variable database contenant le bon id & mdp

var database = [{
  user: "mika",
  pass: "pass"
}];

// Variable qui contient le contenu à afficher en cas d'authentification réussie

var contenu = [{
	user: "Michael",
	message: "Il fait super beau aujourd'hui"
},
{	
	user: "John",
	message: "Je suis énervé sans savoir pourquoi..."
}];

// Demande d'informations (User - Pass)

var askUser = prompt("Quel est ton nom d'utilisateur ?");
var askPass = prompt("Quel est ton mot de passe ?");

// Fonction qui permet de vérifier les informations.
// Affichage du contenu si les infos sont valides
// Alerte en cas de mauvaise tentative.

function signin(user, pass) {
  if (user === database[0].user &&
    pass === database[0].pass) {
    console.log(contenu);
  } else {
    alert('Sorry that\'s not right');
  }
}

// On appelle la fonction contenant les variables (askUser - askPass)

signin(askUser,askPass);






                                                                          
                                                                                                                                              
