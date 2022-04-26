function Projet ({illus, title, description, lien}) {
    return (
        <a className="plink" href={lien} target="_blank" rel="noreferrer">
            <div className="projetCard">
                <img src={illus} alt={title}></img>
                <div className="descripCard">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default Projet;