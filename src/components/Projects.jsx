function Projet ({illus, title, description, lien}) {
    return (
        <div className="plink">
            <a href={lien} target="_blank" rel="noreferrer">
                <div className="projetCard">
                    <img src={illus} alt={title}></img>
                    <div className="descripCard">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Projet;