import CV from "../assets/CV_VM.png";
import CVPDF from "../assets/CV_VM_DL.pdf";

function Cv () {
    return (
        <>
        <div className="dl"><a href={CVPDF} download="CV_VM_DL.pdf"><button className="buttondl">Download &emsp;<i class="fa-solid fa-file-arrow-down"></i></button></a></div>
        <div id="cv">
            <img id="imgcv" src={CV} alt="CV"></img>
        </div>
        </>
    )
}

export default Cv;