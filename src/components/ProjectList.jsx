import React from 'react';
import Projet from './Project';
import dataProjects from '../datas/dataProjects';

export default function ProjectList() {
	return (
		<>
			<div className="typeProject">
				<h2 id="firstType">Projets personnels</h2>
				<div className="allProjetCard">
					{dataProjects
						.sort((a, b) => b.prio - a.prio)
						.filter((dataProject) => dataProject.type === 'perso')
						.map((filteredProject) => (
							<Projet
								dataProjects={filteredProject}
								key={filteredProject.title}
							/>
						))}
				</div>
			</div>
			<div className="typeProject">
				<h2>Projets réalisés à la Wild Code School</h2>
				<div className="allProjetCard">
					{dataProjects
						.sort((a, b) => b.prio - a.prio)
						.filter((dataProject) => dataProject.type === 'wcs')
						.map((filteredProject) => (
							<Projet
								dataProjects={filteredProject}
								key={filteredProject.title}
							/>
						))}
				</div>
			</div>
		</>
	);
}
