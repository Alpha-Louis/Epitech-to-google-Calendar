### Début de script pour transférer les acti de l'intra.epitech.eu sur google calendar

**Il faut avoir nodejs d'installé sur l'ordinateur, ainsi qu'un compte google cloud plateforme (pour accéder à l'api de google)**

Mettez les identifiants nécessaires pour votre api google dans credentials.json
(Votre projet google, doit avoir les autorisations de créer / supprimer / modifier des évenements et afficher vos calendriers)

Créez un fichier config.json reprennant l'exemple de config.exemple.json

```JSON
{
    "CURRENT_PLANNING": "data/current_planning.json", // l'endroit ou vous voulez sauvegarder votre planning
    "TOKEN_PATH": "token.json", // Ne pas toucher
    "AUTO_LOGIN": "auth-ceciestunexemple" // Mettez votre lien d'auto login à cet endroit
}
```