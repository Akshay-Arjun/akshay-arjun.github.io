import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-animated-progress-bar';


const LanguagesList = ({ imgLink, stackName, score }) => {
  const [myRef, setMyRef] = useState(null);
  useEffect(() => {
    setMyRef(document.querySelector('.main-app'));
  }, []);
  return (
   
    <div className="stack-list">
    <ProgressBar width="230" trackWidth="13" percentage={score} scrollArea={myRef} />
    <div className="stack-list__name-wrap">
      <img src={imgLink} alt="" />
      <p>{stackName}</p>
    </div>
  </div>
 
  );
};

export default LanguagesList;