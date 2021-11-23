---
title: News
---

| Scraper | Provider |
|---------|----------|
| [![Build](https://github.com/Covid-Alert-Microservices/news-scraper/actions/workflows/build.yaml/badge.svg)](https://github.com/Covid-Alert-Microservices/news-scraper/actions/workflows/build.yaml) | [![Build](https://github.com/Covid-Alert-Microservices/news-provider/actions/workflows/build.yaml/badge.svg)](https://github.com/Covid-Alert-Microservices/news-provider/actions/workflows/build.yaml) |
| | [![codecov](https://codecov.io/gh/Covid-Alert-Microservices/news-provider/branch/master/graph/badge.svg?token=R3KWA2KVNT)](https://codecov.io/gh/Covid-Alert-Microservices/news-provider) |

Le système de news permet de mettre à disposition des informations qui concernant la Covid-19 à l'utilisateur. Nous avons fait le choix de séparer celui-ci en deux microservices :
- Un scraper qui va récupérer les derniers articles parus sur [CovidTracker](https://covidtracker.fr/)
- Un provider qui aura pour rôle d'assurer la livraison des articles scrapés à l'utilisateur

Le déclenchement du scraper se fera à intervales réguliés par le biais d'un tâche cron.

## Mise à jour des news

```mermaid
%%{init: {
    'theme': 'base', 
    'themeVariables': {
        'actorTextColor': 'black',
        'primaryTextColor': '#25c2a0'
    }
  }
}%%
sequenceDiagram
    autonumber
    CronTab->>Scraper: Il est temps de scraper
    activate Scraper
    Scraper->>CovidTracker: Récupère l'HTML
    Scraper->>Scraper: Récupère les articles relatifs à la Covid-19
    Scraper->>Provider: POST /api/news
    deactivate Scraper
    activate Provider
    Provider->>Redis: Stocke les articles
    deactivate Provider
```

## Récupération des news par l'utilisateur

```mermaid
%%{init: {
    'theme': 'base', 
    'themeVariables': {
        'actorTextColor': 'black',
        'primaryTextColor': '#25c2a0'
    }
  }
}%%
sequenceDiagram
    autonumber
    Utilisateur->>Provider: GET /api/news
    activate Utilisateur
    activate Provider
    Provider->>Redis: Récupère la liste des news
    Provider->>Utilisateur: Renvoie la liste des news
    deactivate Provider
    deactivate Utilisateur
```