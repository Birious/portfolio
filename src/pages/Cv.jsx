import React from 'react';
import CV from '../assets/images/CV_VMORETTE.png';
import CVPDF from '../assets/pdf/CV_VMORETTE.pdf';

function Cv() {
  return (
    <>
      <div className="dl">
        <a href={CVPDF} download="CV_VM_DL.pdf" className="linkdl">
          Download <i className="fa-solid fa-file-arrow-down" />
        </a>
      </div>
      <div id="cv">
        <img id="imgcv" src={CV} alt="CV" />
      </div>
    </>
  );
}

export default Cv;
