import React from 'react';
import PropTypes from 'prop-types';

function Projet({ illus, title, description, lien }) {
  return (
    <div className="plink">
      <a href={lien} target="_blank" rel="noreferrer">
        <div className="projetCard">
          <img src={illus} alt={title} />
          <div className="descripCard">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

Projet.propTypes = {
  illus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lien: PropTypes.string.isRequired,
};

export default Projet;
