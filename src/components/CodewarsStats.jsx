import React, { useEffect, useState } from 'react';
import axios from 'axios';
import codewars from '../assets/images/codewars.svg';

function CodewarsStats() {
  const [honor, setHonor] = useState();

  function searchHonor() {
    axios
      .get(`https://www.codewars.com/api/v1/users/Birious`)
      .then((resp) => resp.data)
      .then((data) => setHonor(data));
  }

  useEffect(searchHonor, []);

  return (
    honor && (
      <div className="cwglobal">
        <a
          href="https://www.codewars.com/users/Birious"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cwcard">
            <img className="imgcw" src={codewars} alt="codewars" />
            <div className="cwstats">
              <p>Honor : {honor.honor}</p>
              <p>Rank : {honor.ranks.overall.name}</p>
            </div>
          </div>
        </a>
      </div>
    )
  );
}

export default CodewarsStats;
