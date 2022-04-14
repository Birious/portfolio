function About () {

    const time = Date.now() - Date.parse("2022-02-28");
    const week = (((((time/1000)/60)/60)/24)/7);
    const month = parseInt(((((time/1000)/60)/60)/24)/30);;

    // Affiche le nombre de semaine effectué moins les mois
    function afficheWeek () {
        const weekOnMonth = parseInt( week%4 );
        if (weekOnMonth === 0) {
            return ".";
        } else if (weekOnMonth === 1) {
            return ` et ${weekOnMonth} semaine`
        } else {
            return ` et ${weekOnMonth} semaines`
        }
    }
    
    

    return (
        <section id="apropos">
            <p>
                Après 5 ans dans le domaine de la comptabilité, j'ai décidé de me <span>reconvertir dans le développement Web</span>. 
                <br/><br/>
                Pour ce faire, j'ai d'abord commencé par <span>apprendre en autodidacte HTML / CSS.</span>  Ayant un intérêt certain pour la programmation, je me suis lancé dans une <span>formation REACT / JS</span> à la Wild Code School de Reims que j'ai débuté il y a {month} mois{afficheWeek()}
                <br/><br/>
                Je me suis <span>pris de passion</span> pour ce domaine, j'ai pour objectif pendant ma formation de faire un maximum de petit projet personnel annexe pour m'entrainer et avoir les meilleures compétences techniques possibles à la sortie de ma formation. Suite à cela, trouver un travail en tant que développeur web pour monter en compétences et dans un futur plus lointain, créer ma propre entreprise en alliant mes compétences dans la comptabilité et de développement.
                <br/><br/>
                Je suis actuellement à la <span>recherche d'un stage</span>, en tant que développeur web, commençant à l'issue de ma formation <span>en Aout / Septembre 2022</span> pour une durée de 4 à 6 mois.
            </p>
        </section>
    )
}

export default About;