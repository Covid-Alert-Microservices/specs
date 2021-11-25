---
title: Vaccins
---

[![Build](https://github.com/Covid-Alert-Microservices/vaccines/actions/workflows/build.yaml/badge.svg)](https://github.com/Covid-Alert-Microservices/vaccines/actions/workflows/build.yaml)

Le système de vaccins permet de mettre à disposition de l'utilisateur un suivi vaccinal concernant la Covid-19.
Ce vaccin étant unique, le système propose le stockage d'un seul vaccin. Si un vaccin existe déjà, la création d'un nouveau vaccin entrainera la modification du vaccin existant.

## Nouveau vaccin

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
    Utilisateur ->> Controller: POST /api/vaccine
    activate Controller
    Controller ->> PostgresDB: Stocke le vaccin
    activate PostgresDB
    PostgresDB ->> Controller: Vaccin
    deactivate PostgresDB
    Controller ->> Utilisateur: Vaccin
    deactivate Controller
```

## Consulter le vaccin

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
    Utilisateur ->> Controller: GET /api/vaccine
    activate Controller
    Controller ->> PostgresDB: Récupère le vaccin
    activate PostgresDB
    PostgresDB ->> Controller: Vaccin
    deactivate PostgresDB
    Controller ->> Utilisateur: Vaccin
    deactivate Controller
```

## Modifier le vaccin

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
    Utilisateur ->> Controller: PUT /api/vaccine
    activate Controller
    Controller ->> PostgresDB: Modifie le vaccin
    activate PostgresDB
    PostgresDB ->> Controller: Vaccin
    deactivate PostgresDB
    Controller ->> Utilisateur: Vaccin
    deactivate Controller
```

## Supprimer le vaccin

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
    Utilisateur ->> Controller: DELETE /api/vaccine
    activate Controller
    Controller ->> PostgresDB: Supprime le vaccin
    deactivate Controller
```