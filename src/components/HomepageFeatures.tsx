/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Automatisé",
    image: "/img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Le déploiement de nos microservices sont automatiques afin de simplifier
        le vie de notre équipe.
      </>
    ),
  },
  {
    title: "API explicite",
    image: "/img/undraw_docusaurus_tree.svg",
    description: <>L'API de chacun de nos microservices est documentée.</>,
  },
  {
    title: "Complétement documenté",
    image: "/img/undraw_docusaurus_react.svg",
    description: (
      <>
        Les interactions entre nos microservices font toutes l'objet d'un
        diagramme UML.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
