import React from 'react';
import PropTypes from 'prop-types';

function Projet({ dataProjects }) {
  return (
    <div className="plink">
      <a href={dataProjects.lien} target="_blank" rel="noreferrer">
        <div className="projetCard">
          <img
            src={dataProjects.illus}
            alt={dataProjects.title}
            className="imgProject"
          />
          <div className="descripCard">
            <h2>{dataProjects.title}</h2>
            <p>{dataProjects.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

Projet.propTypes = {
  dataProjects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    illus: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projet;
