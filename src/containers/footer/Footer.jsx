import React,{useEffect } from 'react';
import Aos from "aos";
import "./footer.css";
import gpt3Logo from '../../assets/verychain2.jpg';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
    return (<div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 data-aos ="fade-up" className="gradient__text2">Porta la tua azienda nel futuro</h1>
    </div>

    <div className="gpt3__footer-btn"data-aos ="fade-up">
      <p>Entra ora</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Roma, Via dei Fori Imperiali  <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Roma, Via dei Fori Imperiali </p>
        <p>06-567843</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>)
}

export default Footer