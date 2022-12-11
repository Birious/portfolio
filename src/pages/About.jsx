import React from 'react';

function About() {
  return (
    <>
      <section id="apropos">
        <p>
          Valentin Morette, 27 ans, j&apos;ai passé les cinq dernières années
          dans le domaine de la comptabilité. Cependant, j&apos;ai décidé de me
          reconvertir car ce domaine ne me satisfaisait plus. Actuellement, je
          suis en formation à la Wild Code School de Reims pour devenir
          développeur web. Passionné de technologie, j&apos;ai commencé à
          apprendre en autodidacte avant de suivre cette formation.
          <br />
          <br />
          Dans le cadre de ma formation, je suis en stage chez Inter-actif, un
          Apple Premium Reseller. Mon travail consiste à créer des outils
          internes pour l&apos;entreprise, comme des outils de visualisation de
          chiffres où de gestion du site en ligne. Cette expérience en stage me
          permet de mettre en pratique les compétences que j&apos;ai acquises
          pendant ma formation et de découvrir le monde du travail en tant que
          développeur web.
          <br />
          <br />
          Mon objectif à la fin de ma formation est d&apos;avoir les meilleures
          compétences techniques possibles pour pouvoir trouver un emploi en
          tant que développeur web et continuer à apprendre et à évoluer dans ce
          domaine passionnant. Dans un futur plus lointain, j&apos;aimerais
          créer ma propre entreprise en combinant mes compétences en
          comptabilité et en développement web.
        </p>
      </section>
      <section id="techno">
        <h2>Technologies</h2>
        <div className="techno">
          <div className="techno1">
            <h3>Front-end</h3>
            <ul>
              <li>- HTML</li>
              <li>- CSS</li>
              <li>- JavaScript</li>
              <li>- React</li>
            </ul>
          </div>
          <div className="techno2">
            <h3>Back-end</h3>
            <ul>
              <li>- Node.js</li>
              <li>- Express</li>
              <li>- MySQL</li>
              <li>- PHP</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
