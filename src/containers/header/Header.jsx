import React,{useEffect } from 'react';
import Aos from "aos";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/nakamoto.svg";
import "aos/dist/aos.css"





const Header = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
    return (

   
       
  
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 data-aos="fade-right" className="gradient__text" > Digitalizza tutti i processi per la tua impresa con la blockchain </h1>
      <p className="gradient__text">VeryChain  sfrutta le blockchain commerciali per automatizzare e digitalizzare i processi aziendali.
      Documenti, contratti, firme digitali e brevetti saranno al sicuro con noi </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Inizia ora</button>
      </div>

      
    </div> 

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>

    )
}

export default Header


