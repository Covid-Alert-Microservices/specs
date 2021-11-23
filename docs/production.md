---
sidebar_position: 5
---

# Mise en production

Tous les services requis à la mise en production de **CovidAlert** seront effectués sur la même machine phyique à l'exception de la base de données
Neo4j que l'on hébergera via [neo4j.io](https://neo4j.io/).

## Intégration et déploiement continu

Chacun de nos microservice fait l'objet d'une intégration continue qui build et test l'application à chaque fois que des changements
sont poussés sur le dépôt. De plus, dans le cas où la branche concernée est notre branche de production (`master` pour la plupart de nos dépôts)
le microservice est déployé sur l'environnement de production.

## Schéma de l'environnement de production

![](/img/architecture.png)