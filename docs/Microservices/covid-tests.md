---
title: Tests Covid
---

[![Build](https://github.com/Covid-Alert-Microservices/covid-tests/actions/workflows/build.yaml/badge.svg)](https://github.com/Covid-Alert-Microservices/covid-tests/actions/workflows/build.yaml)

Le système de tests permet de mettre à disposition de l'utilisateur un suivi de ces tests concernant la Covid-19.

## Nouveau test

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
    Utilisateur ->> Controller: POST /api/covid-tests
    activate Controller
    Controller ->> PostgresDB: Stocke le test
    activate PostgresDB
    PostgresDB ->> Controller: Test
    deactivate PostgresDB
    rect rgb(245, 245, 245)
    opt Test positif
    Controller ->> Kafka: user_positive
    end
    end
    Controller ->> Utilisateur: Test
    deactivate Controller
```

## Consulter les tests

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
    Utilisateur ->> Controller: GET /api/covid-tests
    activate Controller
    Controller ->> PostgresDB: Récupère les tests
    activate PostgresDB
    PostgresDB ->> Controller: Tests
    deactivate PostgresDB
    Controller ->> Utilisateur: Tests
    deactivate Controller
```

## Consulter un test

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
    Utilisateur ->> Controller: GET /api/covid-tests/:id
    activate Controller
    Controller ->> PostgresDB: Récupère le test
    activate PostgresDB
    PostgresDB ->> Controller: Test
    deactivate PostgresDB
    Controller ->> Utilisateur: Test
    deactivate Controller
```

## Modifier un test

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
    Utilisateur ->> Controller: PUT /api/covid-tests/:id
    activate Controller
    Controller ->> PostgresDB: Modifie le test
    activate PostgresDB
    PostgresDB ->> Controller: Test
    deactivate PostgresDB
    rect rgb(245, 245, 245)
    opt Test positif
    Controller ->> Kafka: user_positive
    end
    end
    Controller ->> Utilisateur: Test
    deactivate Controller
```

## Supprimer un test

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
    Utilisateur ->> Controller: DELETE /api/covid-tests/:id
    activate Controller
    Controller ->> PostgresDB: Supprime le test
    deactivate Controller
```
