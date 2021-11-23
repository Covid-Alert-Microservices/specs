---
title: Alertes
---

[![Build](https://github.com/Covid-Alert-Microservices/alerts/actions/workflows/build.yaml/badge.svg)](https://github.com/Covid-Alert-Microservices/alerts/actions/workflows/build.yaml)

Le système d'alertes permet de notifier les potentiels cas contact au travers d'une simple API REST qui sera interrogée par un client frontend. Une alerte à une durée de validité de 7 jours (temps incubation et période contagieuse), après ce délai elle n'est plus considérée comme valide. La supression des alertes inactives se fait à l'aide de CronTab.

## Nouvelle alerte
L'ajout d'une nouvelle alerte est un processus asynchrone déclanché quand un membre est considéré comme cas contact.

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
    activate Kafka
    Kafka ->> Listener: send_alert {user}
    activate Listener
    Listener ->> PostgresDB: insert alert
    activate PostgresDB
    deactivate PostgresDB
    deactivate Listener
    deactivate Kafka
    
```

## Consulter les alertes

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
    activate Agent
    Agent ->> Controller: GET /alert
    activate Controller
    Controller ->> PostgresDB: get user's alerts
    activate PostgresDB
    PostgresDB ->> Controller : alerts
    deactivate PostgresDB
    Controller ->> Agent : alerts
    deactivate Controller
    deactivate Agent
    
```

## Supprimer une alertes

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
    activate Agent
    Agent ->> Controller: DELETE /alert/:id
    activate Controller
    Controller ->> PostgresDB: delete alert
    activate PostgresDB
    PostgresDB ->> Controller : alert
    deactivate PostgresDB
    Controller ->> Agent : alert
    deactivate Controller
    deactivate Agent
    
```