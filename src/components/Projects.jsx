function Projet ({illus, title, description, lien}) {
    return (
        <a href={lien} target="_blank" rel="noreferrer">
            <div class="projetCard">
                <img src={illus} alt={title}></img>
                <div class="descripCard">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default Projet;