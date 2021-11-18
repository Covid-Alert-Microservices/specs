"use strict";(self.webpackChunkspecs=self.webpackChunkspecs||[]).push([[937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Contexte",u={unversionedId:"contexte",id:"contexte",isDocsHomePage:!1,title:"Contexte",description:"Nous allons ici pr\xe9senter le contexte dans lequel s'est effectu\xe9 ce projet.",source:"@site/docs/contexte.md",sourceDirName:".",slug:"/contexte",permalink:"/specs/docs/contexte",editUrl:"https://github.com/covid-alert-microservices/specs/edit/master/docs/contexte.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/specs/docs/architecture"}},c=[{value:"Le sujet",id:"le-sujet",children:[{value:"Fonctionnalit\xe9s",id:"fonctionnalit\xe9s",children:[],level:3},{value:"Contraintes techniques",id:"contraintes-techniques",children:[],level:3},{value:"Contraintes organisationnelles",id:"contraintes-organisationnelles",children:[],level:3},{value:"Date de d\xe9but de projet et de rendu",id:"date-de-d\xe9but-de-projet-et-de-rendu",children:[],level:3}],level:2},{value:"L&#39;\xe9quipe",id:"l\xe9quipe",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contexte"},"Contexte"),(0,i.kt)("p",null,"Nous allons ici pr\xe9senter le contexte dans lequel s'est effectu\xe9 ce projet."),(0,i.kt)("h2",{id:"le-sujet"},"Le sujet"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Covid Alert")," a \xe9t\xe9 d\xe9velopp\xe9 dans le cadre d'un projet de cours. Le but de cette application est de mettre \xe0 disposition des utilisateurs des fonctionnalit\xe9s similaires \xe0 ",(0,i.kt)("a",{parentName:"p",href:"https://bonjour.tousanticovid.gouv.fr/"},"TousAntiCovid"),"."),(0,i.kt)("h3",{id:"fonctionnalit\xe9s"},"Fonctionnalit\xe9s"),(0,i.kt)("p",null,"Les fonctionnalit\xe9s attendues sont les suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enregistrer la position des utilisateur sur une dur\xe9e de 1 mois"),(0,i.kt)("li",{parentName:"ul"},"Pouvoir entrer son \xe9tat vaccinal"),(0,i.kt)("li",{parentName:"ul"},"Pouvoir entrer les r\xe9sultat de ses tests Covid"),(0,i.kt)("li",{parentName:"ul"},"Lors d'un cas positif d\xe9tect\xe9, avertir toutes les personnes aillant r\xe9cemment crois\xe9 ce dernier"),(0,i.kt)("li",{parentName:"ul"},"Fournir des nouvelles concernant le Covid aux utilisateurs")),(0,i.kt)("h3",{id:"contraintes-techniques"},"Contraintes techniques"),(0,i.kt)("p",null,"Les contraintes techniques du projet sont les suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L'architecture devra \xeatre compos\xe9e de plusieurs microservices"),(0,i.kt)("li",{parentName:"ul"},"L'authentification sera d\xe9l\xe9gu\xe9e \xe0 ",(0,i.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"Keycloak")),(0,i.kt)("li",{parentName:"ul"},"Le stockage des positions des utilisateurs sera effectu\xe9 par le biais de ",(0,i.kt)("a",{parentName:"li",href:"https://kafka.apache.org/"},"Kafka")),(0,i.kt)("li",{parentName:"ul"},"Les positions o\xf9 une personne positive a \xe9t\xe9 d\xe9tect\xe9e seront stock\xe9es dans une base de donn\xe9es ",(0,i.kt)("a",{parentName:"li",href:"https://kafka.apache.org/"},"PostreSQL")),(0,i.kt)("li",{parentName:"ul"},"Chaque microservice sera test\xe9"),(0,i.kt)("li",{parentName:"ul"},"Les microservices seront fait \xe0 l'aide de ",(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," et ",(0,i.kt)("a",{parentName:"li",href:"https://gradle.org/"},"Gradle"))),(0,i.kt)("h3",{id:"contraintes-organisationnelles"},"Contraintes organisationnelles"),(0,i.kt)("p",null,"Les contraintes organisationnelles du projet sont les suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L'int\xe9gration et le d\xe9ploiement des microservices seront assur\xe9s par un syst\xe8me de CI/CD"),(0,i.kt)("li",{parentName:"ul"},"Les d\xe9p\xf4ts ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," devront avoir au minimum 3 branches correspondants au stage de d\xe9veloppement : ",(0,i.kt)("inlineCode",{parentName:"li"},"production"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"staging")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"development")),(0,i.kt)("li",{parentName:"ul"},"Les groupes de projet sont compos\xe9s de 3 \xe9l\xe8ves maximum"),(0,i.kt)("li",{parentName:"ul"},"Chaque membre du groupe devra avoir un r\xf4le bien pr\xe9cis qu'il d\xe9fendra lors des oraux")),(0,i.kt)("h3",{id:"date-de-d\xe9but-de-projet-et-de-rendu"},"Date de d\xe9but de projet et de rendu"),(0,i.kt)("p",null,"Le projet a d\xe9but\xe9 le ",(0,i.kt)("strong",{parentName:"p"},"12 octobre 2021")," et les oraux se feront le ",(0,i.kt)("strong",{parentName:"p"},"29 novembre 2021"),"."),(0,i.kt)("h2",{id:"l\xe9quipe"},"L'\xe9quipe"),(0,i.kt)("p",null,"Le groupe que nous avons constitu\xe9 pour la r\xe9alisation de ce projet est le suivant :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Axel Duval"),(0,i.kt)("li",{parentName:"ul"},"Florent Hugouvieux"),(0,i.kt)("li",{parentName:"ul"},"Keven Dvorianoff")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Axel Duval")," : aura pour responsabilit\xe9 de s'occuper de la gestion de la localisation sur frontent comme sur le backend. Il devra \xe9galement trouver des moyens pour optimiser le traitement des requ\xe8tes d'analyse. De plus, il s'occupera de l'UX/UI des maquettes du frontend. Pour finir, il s'occupera des divers graphiques relatifs au covid en France pr\xe9sents sur le frontend."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Florent Hugouvieux")," aura pour responsabilit\xe9 de s'occuper de la partie CI/CD du projet, de mettre en place l'environnement de production ainsi que de s'assurer que l'environnement de d\xe9veloppement am\xe8ne le moins de frictions pour le reste de l'\xe9quipe ; permettant ainsi un maximum de productivit\xe9 chez ces derniers. De plus, il s'assurera de la bonne couverture du code par les tests pour chaque microservice. Enfin, il s'ocupera des microservices en rapport avec les nouvelles li\xe9es au Covid."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keven Dvorianoff")," : Tests covids et vaccination"))}d.isMDXComponent=!0}}]);