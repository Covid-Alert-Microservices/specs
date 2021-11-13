---
sidebar_position: 1
---

# Contexte

Nous allons ici présenter le contexte dans lequel s'est effectué ce projet.

## Le sujet

**Covid Alert** a été développé dans le cadre d'un projet de cours. Le but de cette application est de mettre à disposition des utilisateurs des fonctionnalités similaires à [TousAntiCovid](https://bonjour.tousanticovid.gouv.fr/).

### Fonctionnalités

Les fonctionnalités attendues sont les suivantes :
- Enregistrer la position des utilisateur sur une durée de 1 mois
- Pouvoir entrer son état vaccinal
- Pouvoir entrer les résultat de ses tests Covid
- Lors d'un cas positif détecté, avertir toutes les personnes aillant récemment croisé ce dernier
- Fournir des nouvelles concernant le Covid aux utilisateurs

### Contraintes techniques

Les contraintes techniques du projet sont les suivantes :
- L'architecture devra être composée de plusieurs microservices
- L'authentification sera déléguée à [Keycloak](https://www.keycloak.org/)
- Le stockage des positions des utilisateurs sera effectué par le biais de [Kafka](https://kafka.apache.org/)
- Les positions où une personne positive a été détectée seront stockées dans une base de données [PostreSQL](https://kafka.apache.org/)
- Chaque microservice sera testé
- Les microservices seront fait à l'aide de [Spring Boot](https://spring.io/projects/spring-boot) et [Gradle](https://gradle.org/)

### Contraintes organisationnelles

Les contraintes organisationnelles du projet sont les suivantes :
- L'intégration et le déploiement des microservices seront assurés par un système de CI/CD
- Les dépôts [Git](https://git-scm.com/) devront avoir au minimum 3 branches correspondants au stage de développement : `production`, `staging` et `development`
- Les groupes de projet sont composés de 3 élèves maximum
- Chaque membre du groupe devra avoir un rôle bien précis qu'il défendra lors des oraux

### Date de début de projet et de rendu

Le projet a débuté le **12 octobre 2021** et les oraux se feront le **29 novembre 2021**.

## L'équipe

Le groupe que nous avons constitué pour la réalisation de ce projet est le suivant :
- Axel Duval
- Florent Hugouvieux
- Keven Dvorianoff

**Axel Duval** : aura pour responsabilité de s'occuper de la gestion de la localisation sur frontent comme sur le backend. Il devra également trouver des moyens pour optimiser le traitement des requètes d'analyse. De plus, il s'occupera de l'UX/UI des maquettes du frontend. Pour finir, il s'occupera des divers graphiques relatifs au covid en France présents sur le frontend.

**Florent Hugouvieux** aura pour responsabilité de s'occuper de la partie CI/CD du projet, de mettre en place l'environnement de production ainsi que de s'assurer que l'environnement de développement amène le moins de frictions pour le reste de l'équipe ; permettant ainsi un maximum de productivité chez ces derniers. De plus, il s'assurera de la bonne couverture du code par les tests pour chaque microservice. Enfin, il s'ocupera des microservices en rapport avec les nouvelles liées au Covid.

**Keven Dvorianoff** : Tests covids et vaccination

