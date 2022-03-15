import React,{useEffect } from 'react';
import Aos from "aos";
import "./whatreact.css";


const Whatreact = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
    return (
         <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
   
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title2">
      <div />
      <h1>Cos'è VeryChain</h1>
    </div>
    <div className="gpt3__features-container_feature-text2">
      <p>Con la nostra tecnologia risolviamo diversi problemi e rischi connessi all’archiviazione, condivisione e firma di file. VeryChain, 
        infatti, è la prima piattaforma per la gestione di tutto il ciclo di vita dei documenti con validazione in Blockchain</p>
    </div>
  </div>

    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 data-aos="fade-left" className="gradient__text1">Migliora la tua azienda... e la tua vita.</h1>

      
    </div>



    <div className="gpt3__whatgpt3-container">

    <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title2">
      <div />
      <h1>Aziende</h1>
    </div>
    <div className="gpt3__features-container_feature-text2">
      <p>La digitalizzazione di documenti e la loro salvaguardia attraverso VeryChain aiuteranno a cresecere la tua azienda</p>
    </div>
  </div>



  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title2">
      <div />
      <h1>Professionisti</h1>
    </div>
    <div className="gpt3__features-container_feature-text2">
      <p>VeriChain ti aiuta a gestire meglio i clienti e le proprie necessità</p>
    </div>
  </div>



  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title2">
      <div />
      <h1>Utenti</h1>
    </div>
    <div className="gpt3__features-container_feature-text2">
      <p>Tutela la tua persona e chi a mi con VeryChain</p>
    </div>
  </div>
      
      
    </div>
  </div>
    )}

export default Whatreact

