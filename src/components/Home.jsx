import PP from "../assets/pp.png"

function Home () {
    return (
        <div id="homepage">
            <img id="pp" src={PP} alt="Valentin"></img>
            <div id="baseinfo">
                <h1 id="name">Valentin Morette</h1>
                <p>Développeur Web Junior</p>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/valentinmorette/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Birious" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                    <a href="https://twitter.com/VM__Dev" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Home;