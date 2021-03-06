import bacle from "./appsImages/bacle.jpg";
import appFinance from "./appsImages/app_finance.jpg";
import healven from "./appsImages/healven.jpg";
import portfolio from "./appsImages/portfolio.jpg";
import ruckfield from "./appsImages/ruckfield.jpg";
import foodyril from "./appsImages/foodyril.jpg";

const tabProject = [
  {
    title: "Bacle",
    redirection: "https://play.google.com/store/apps/details?id=com.bacle",
    description: "xxx",
    image: bacle,
    typeProject: "app",
  },
  {
    title: "Application de Finance",
    redirection:
      "https://github.com/CyrilDesch/FinanceAppDesign/blob/main/README.md",
    description: "Reproduction d'un design coder en Flutter",
    image: appFinance,
    typeProject: "app",
  },
  {
    title: "Healven",
    redirection:
      "https://github.com/CyrilDesch/HealvenApp/blob/master/README.md",
    description:
      "Le but de ce projet personnel était de développer une application similaire à Runtastic, qui permet de suivre vos entrainements de course. Healven permet de créer un compte et de garder l'historique de ses entrainements au travers d'une carte. Afin d'accomplir ce projet, j'ai appris à mettre en place un Back-End de A à Z. Pour ce projet, j'ai utilisé ExpressJS. En ce qui concerne React Native, j'ai d'abord appris à créer un tracker et à l'optimiser au mieux pour réduire l'utilisation de la batterie. Par la suite, j'ai créé l'interface de l'application. Il ne me restait donc qu'à relier les données avec l'API et ma base de données MongoDB.",
    image: healven,
    typeProject: "app",
  },
  {
    title: "PortfolioV1",
    redirection: "https://github.com/CyrilDesch/PortfolioV1",
    description:
      "Ce site a pour but de me présenter rapidement moi ainsi que mes projets. Celui-ci a été développé avec React JS pour continuer à améliorer mon bagage technique. Mon objectif, durant ce projet, était d'apprendre à animer, de la meilleure des façons, plusieurs types de composants.",
    image: portfolio,
    typeProject: "site",
  },
  {
    title: "RuckField",
    redirection: "http://p2004222.pages.univ-lyon1.fr/ruckfield/",
    description:
      "Réalisation de l'interface d'un site de vente de produits en rapport avec le rugby. J'ai utilisé mes compétences en HTML/CSS pour développer un site web plutôt simple mais qui a été très enrichissant pour moi en termes de compétences techniques.",
    image: ruckfield,
    typeProject: "site",
  },
  {
    title: "FoodYril",
    redirection:
      "https://github.com/CyrilDesch/FoodYril-Ancienne-Version/blob/main/README.md",
    description:
      "Ce projet, qui s'est déroulé sur un an, a été ma première réalisation avec React Native. L'application a pour but de simplifier la recherche de recettes et de guider de A à Z l'utilisateur pendant la préparation de celles-ci. En ce qui concerne le Back-End, j'ai relié l'application à l'outil Firestore de Google et j'ai ensuite optimisé les fonctions de requête. Ce projet m'a permis de développer mes compétences en développement mobile et en gestion de projet.",
    image: foodyril,
    typeProject: "app",
  },
];

export default tabProject;
