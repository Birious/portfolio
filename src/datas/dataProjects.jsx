import poster from '../assets/images/img_projet/posteries.png';
import trombi from '../assets/images/img_projet/trombi.png';
import coockie from '../assets/images/img_projet/coockie_cliker.png';
import wcw from '../assets/images/img_projet/wcw.png';
import mario from '../assets/images/img_projet/mario.png';
import sam from '../assets/images/img_projet/sam.png';
import todolist from '../assets/images/img_projet/todolist.png';

const dataProjects = [
	{
		title: 'Shop Around Me (Mobile Only)',
		description:
			"Il s'agit du troisième projet de groupe réalisé à la Wild Code School. L'application mobile permet de trouver des produits proches de l'utilisateur.",
		illus: sam,
		// lien: 'https://github.com/WildCodeSchool/2022-03-JS-Reims-project-3-shop-around-me',
		lien: 'https://github.com/Valentin-Morette/Shop-around-me',
		type: 'wcs',
		prio: 3,
	},
	{
		title: 'Posteries',
		description:
			"Il s'agit du second projet de groupe réalisé à la Wild Code School. Ce jeu utilise l'API 'The Movie Database' et consiste à deviner le plus rapidement possible le poster d'un film.",
		illus: poster,
		lien: 'https://theodep.github.io/Posteries/#/',
		type: 'wcs',
		prio: 2,
	},
	{
		title: 'Trombinoscope',
		description:
			"Le premier projet de groupe réalisé à la Wild Code School, il s'agit d'un trombinoscope de notre promotion.",
		illus: trombi,
		lien: 'https://Valentin-Morette.github.io/trombinoscope/',
		type: 'wcs',
		prio: 1,
	},
	{
		title: 'Wild Code Wars',
		description:
			"Cette page utilise l'API du jeu d'algorithme Code Wars pour regrouper les statistiques de l'ensemble de la promotion de la Wild Code School sur ce jeu.",
		illus: wcw,
		lien: 'https://Valentin-Morette.github.io/wild-code-wars/',
		type: 'perso',
		prio: 4,
	},
	{
		title: 'Mario 64 Soluce',
		description:
			"Ce site présente des solutions pour le jeu Mario 64 sous forme vidéo. Ce projet personnel m'a permis de m'entraîner avec une base de données.",
		illus: mario,
		lien: 'https://github.com/Valentin-Morette/m64soluce',
		type: 'perso',
		prio: 3,
	},
	{
		title: 'To Do List',
		description:
			"Petit entraînement sur l'exercice classique de la To Do List.",
		illus: todolist,
		lien: 'https://valentin-morette.github.io/ToDoList/',
		type: 'perso',
		prio: 1,
	},
	{
		title: 'Coockie-Cliker',
		description:
			"Ce jeu reprend les principes établis par Cookie-Clicker, et constitue un espace d'entraînement pour perfectionner mes compétences en React en dehors des exercices proposés dans les cours.",
		illus: coockie,
		lien: 'https://Valentin-Morette.github.io/coockie_cliker/',
		type: 'perso',
		prio: 2,
	},
];

export default dataProjects;
