import React,{useEffect } from 'react';
import Aos from "aos";
import "./possibility.css";

import possibilityImage from "../../assets/portfolio.svg"

const Possibility = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
    return (   <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">

      <h1  data-aos ="fade-left"className="gradient__text">Accedi a possibilità illimitate</h1>
      <p className="gradient__text">La potenza delle blockchain in collaborazione con VeryChain è illimitata e in continua crescita. Che aspetti fai crescere la tua azienda! </p>
    
    </div>
  </div>
    )
}

export default Possibility