---
sidebar_position: 3
---

# Topics

Comme indiqué dans précédemment dans le contexte du projet, nous devons utiliser [Kafka](https://kafka.apache.org/intro) pour communiquer entre nos divers microservices. La communication sur cette plateforme distribuée de diffusion d'événements se gère avec ce que l'on appelle des [topics](https://kafka.apache.org/intro#intro_concepts_and_terms).

Afin d'assurer une bonne communication et une interropérabilité entre les services nous nous sommes mis d'accord sur des interfaces de communication.

### [geolocation_created]
> Lorsqu'une géolocalisation est enregistrée il faut mettre à jour le graph de proximité de manière asynchrone.

**geolocation service** -> *geolocation_created* -> **geolocation service**

```java
class GeolocationCreatedDTO {
    private Geolocation geolocation;
}
```

### [user_positive]
> Lorsqu'un utilisateur rentre un test positif sur l'application, le service des tests doit alerter le service de géolocalisation pour que celui-ci puisse trouver les personnes contacts.

**tests service** -> *user_positive* -> **geolocation service**

```java
class UserPositiveDTO {
    private String userId;
    private Long timestamp;
}
```

### [send_alert]
> Lorsque le service de géolocalisation trouve des personnes contact il doit faire en sorte qu'elles soient notifiées.

**geolocation service** -> *send_alert* -> **alert service**

```java
class SendAlertDTO {
    private String userId;
    private Long timestamp;
}
```
