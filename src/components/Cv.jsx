import CV from "../assets/CV_VMorette.png";
import CVPDF from "../assets/CV_VMorette.pdf";

function Cv() {
  return (
    <>
      <div className="dl">
        <a href={CVPDF} download="CV_VM_DL.pdf" className="linkdl">
          Download <i class="fa-solid fa-file-arrow-down"></i>
        </a>
      </div>
      <div id="cv">
        <img id="imgcv" src={CV} alt="CV"></img>
      </div>
    </>
  );
}

export default Cv;
