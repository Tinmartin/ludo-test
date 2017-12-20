# LA MAP-APP
### Idées
- App sur une seule page
- un menu sur la gauche?
- des boutons pour accéder aux différentes parties de l'APP:
  - un classement des joueurs
  - une carte de la zone de diffusion
  - suivi tps réel en géolocalisation
- voir avec un des desinger du Video-mapping-center?

### Technos
- front-end dev avec React.js (à confirmer)
- back avec Ruby (API directement?)
- front-end library ? material-desing-lite / materialize?

### Contraintes techniques
- vraisemblament plusieurs centaines / millers d'utilisateurs, prévoir une important charge serveur
- anglais / français (prévoir **i18n**)
- éviter les requetes trop fréquentes à partir des mobiles pour économiser la batterie (geoloc consomme déjà bcp)

### Users stories
**En tant que participant je peux:**
- me connecter (éventuellement avec FB connect) / créer un compte
- consulter / modifier / supprimer les informations me concernant
- checker la map temps réel et les différents points de diffusion
- avoir des informations sur les diffusions en cours ou à venir (calendrier horaire)
- donner mon avis sur les diffusions auxquelles j'ai assisté / laisser un commentaire général sur l'event
- consulter la liste des artistes ayant travaillé sur un projet
- accéder au site du video mapping center, consulter les prochains events
- suivre le scénario de jeu de piste prévu pour la journée
- consulter le classement des joueurs
- interagir avec certaines projections
- recevoir des notifications lorsque je suis dans la zone d'une diffusion (début dans x minutes / merci d'avoir assisté à ...)

**En tant que membre du staff je peux:**
- consulter la liste des joueurs inscrits (sans données confidentielles ?) ainsi que le classement
- consulter les commentaires pour une diffusion donnée et pour toutes les diffusions de l'event
- envoyer un message / une notification à l'intention de l'ensemble des participants
- checker le nombre de users dans une zone donnée (autour d'un point de diffusion)
  - *Je ne pense pas qu'il soit nécessaire / possible ou acceptable de faire apparaître les users sur une map, ne serait-ce que pour des questions de confidentialité*
- agir sur certains events à distance (changer un trigger par exemple)


### fonctionnalités développées:
**pour le moment, rien!**

___

*Rails app generated with Slim Bootstrap Template from [Meyclem/rails-templates](https://github.com/Meyclem/rails_templates), created by [Meyclem](http://meyclem.com).*
