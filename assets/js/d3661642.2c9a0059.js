(self.webpackChunkspecs=self.webpackChunkspecs||[]).push([[639],{3850:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return v}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=r(3456),i=["components"],l={title:"Alertes"},c=void 0,u={unversionedId:"Microservices/alerts",id:"Microservices/alerts",isDocsHomePage:!1,title:"Alertes",description:"Build",source:"@site/docs/Microservices/alerts.md",sourceDirName:"Microservices",slug:"/Microservices/alerts",permalink:"/specs/docs/Microservices/alerts",editUrl:"https://github.com/covid-alert-microservices/specs/edit/master/docs/Microservices/alerts.md",tags:[],version:"current",frontMatter:{title:"Alertes"},sidebar:"tutorialSidebar",previous:{title:"Mise en production",permalink:"/specs/docs/production"},next:{title:"G\xe9olocalisation",permalink:"/specs/docs/Microservices/geolocation"}},d=[{value:"Nouvelle alerte",id:"nouvelle-alerte",children:[],level:2},{value:"Consulter les alertes",id:"consulter-les-alertes",children:[],level:2},{value:"Supprimer une alertes",id:"supprimer-une-alertes",children:[],level:2}],m={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Covid-Alert-Microservices/alerts/actions/workflows/build.yaml"},(0,s.kt)("img",{parentName:"a",src:"https://github.com/Covid-Alert-Microservices/alerts/actions/workflows/build.yaml/badge.svg",alt:"Build"}))),(0,s.kt)("p",null,"Le syst\xe8me d'alertes permet de notifier les potentiels cas contact au travers d'une simple API REST qui sera interrog\xe9e par un client frontend. Une alerte \xe0 une dur\xe9e de validit\xe9 de 7 jours (temps incubation et p\xe9riode contagieuse), apr\xe8s ce d\xe9lai elle n'est plus consid\xe9r\xe9e comme valide. La supression des alertes inactives se fait \xe0 l'aide de CronTab."),(0,s.kt)("h2",{id:"nouvelle-alerte"},"Nouvelle alerte"),(0,s.kt)("p",null,"L'ajout d'une nouvelle alerte est un processus asynchrone d\xe9clanch\xe9 quand un membre est consid\xe9r\xe9 comme cas contact."),(0,s.kt)(o.Mermaid,{chart:"%%{init: {\n    'theme': 'base', \n    'themeVariables': {\n        'actorTextColor': 'black',\n        'primaryTextColor': '#25c2a0'\n    }\n  }\n}%%\nsequenceDiagram\n    autonumber\n    activate Kafka\n    Kafka ->> Listener: send_alert {user}\n    activate Listener\n    Listener ->> PostgresDB: insert alert\n    activate PostgresDB\n    deactivate PostgresDB\n    deactivate Listener\n    deactivate Kafka\n    ",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"consulter-les-alertes"},"Consulter les alertes"),(0,s.kt)(o.Mermaid,{chart:"%%{init: {\n    'theme': 'base', \n    'themeVariables': {\n        'actorTextColor': 'black',\n        'primaryTextColor': '#25c2a0'\n    }\n  }\n}%%\nsequenceDiagram\n    autonumber\n    activate Agent\n    Agent ->> Controller: GET /alert\n    activate Controller\n    Controller ->> PostgresDB: get user's alerts\n    activate PostgresDB\n    PostgresDB ->> Controller : alerts\n    deactivate PostgresDB\n    Controller ->> Agent : alerts\n    deactivate Controller\n    deactivate Agent\n    ",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"supprimer-une-alertes"},"Supprimer une alertes"),(0,s.kt)(o.Mermaid,{chart:"%%{init: {\n    'theme': 'base', \n    'themeVariables': {\n        'actorTextColor': 'black',\n        'primaryTextColor': '#25c2a0'\n    }\n  }\n}%%\nsequenceDiagram\n    autonumber\n    activate Agent\n    Agent ->> Controller: DELETE /alert/:id\n    activate Controller\n    Controller ->> PostgresDB: delete alert\n    activate PostgresDB\n    PostgresDB ->> Controller : alert\n    deactivate PostgresDB\n    Controller ->> Agent : alert\n    deactivate Controller\n    deactivate Agent\n    ",mdxType:"Mermaid"}))}v.isMDXComponent=!0},1748:function(e,t,r){var n={"./locale":9234,"./locale.js":9234};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=1748}}]);