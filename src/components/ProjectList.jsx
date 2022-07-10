import React from 'react';
import Projet from './Project';
import dataProjects from '../datas/dataProjects';

export default function ProjectList() {
  return (
    <div className="allProjetCard">
      {dataProjects.map((dataProject) => (
        <Projet dataProjects={dataProject} key={dataProject.title} />
      ))}
    </div>
  );
}
