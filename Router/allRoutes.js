import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/coaching", "Coaching", "/pages/coaching.html"),
    new Route("/equicoaching", "Equicoaching", "/pages/equicoaching.html"),
    new Route("/relation", "Relation", "/pages/relation.html"),
    new Route("/jesuis", "Qui je suis", "/pages/jesuis.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Changement mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservation/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html", "js/reserver.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Site Stéphanie Regairaz";