---
sidebar_position: 2
---

# Architecture

Comme indiqué dans précédemment dans le contexte du projet, nous devons réaliser ce dernier par le biais d'une architecture microservices. Cette page décrit l'architecture que nous avons adoptées mettant en exergue le découpage effectué.

## Schéma d'architecture

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'lineColor': '#25c2a0' }}}%%
flowchart LR

    subgraph Authentication
        direction LR
        PK[(Postgres)] <-.-> K[Keycloack] 
    end

    subgraph d[Données santé]
        direction BT
        TestPostgres[(Postgres)] <-..-> Tests[Tests Covid Microservice]
        VaccinPostgres[(Postgres)] <-.-> Vaccin[Vaccins Microservice]
    end

    subgraph n[News]
        Scraper[Scraping Microservice] --> NewsM[News Microservice]
        Redis[(Redis)] <-.-> NewsM
    end

    subgraph a[Prévention]
        direction BT
        Alert[Alertes Microservice]
        GeoPostgres[(Postgres)] <-.-> Geo[Geolocalisation Microservice] 
        GeoNeo4j[(Neo4j)] <-.-> Geo
    end

    KK{{Kafka}}
    
    Authentication <----> a
    Authentication <---> d
    
    Tests --> KK
    Geo --> KK
    KK --> Alert

```