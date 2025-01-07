import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/coaching", "Coaching", "/pages/coaching.html"),
    new Route("/equicoaching", "Equicoaching", "/pages/equicoaching.html"),
    new Route("/relation", "Relation", "/pages/relation.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"], "js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement mot de passe", "/pages/auth/editPassword.html", ["client","admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservation/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html", ["client"], "js/reserver.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Site Stéphanie Regairaz";