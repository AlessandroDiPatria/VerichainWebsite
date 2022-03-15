import React,{useEffect } from 'react';
import Aos from "aos";
import Feature2 from '../../components/feature/Feature';
import './features.css';

const featuresData = [  // andiamo a definire il nuovo componente 
    {
      title: 'Archivia i tuoi documenti aziendali',
      text: 'Grazie a VeryChain i tuoi documenti saranno al sicuro e sempre disponibili ',
    },
    {
      title: 'Gestisci le credenziali aziendali',
      text: 'VeryCha ti permette di creare un badge aziendale elettronico emettendo delle credenziali verificabili a tutti i collaboratori',
    },
    {
      title: 'Firma i tuoi contratti',
      text: 'Con nostra App potrai firmare elettronicamente un documento risparmiando moltissimo tempo e denaro.',
    },
    {
      title: 'Notarizza ordini,bolle e verbali',
      text: 'Con VeryChain potrai notarizzare un documento provandone l’integrità e l’esistenza in un determinato data e ora',
    },
  ];


const Features = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
    return ( 
        <div className="gpt3__features section__padding" id="features">
          <div className="gpt3__features-heading">
            <h1 className="gradient__text" data-aos="fade-right">La rivoluzione per la tua impresa è qui che ti aspetta! </h1>
            <p>Inizia Subito</p>
          </div>
          <div className="gpt3__features-container" data-aos ="fade-left">
            {featuresData.map((item, index) => (
              <Feature2 title={item.title} text={item.text} key={item.title + index} /> ///andiamo a scorrere dinamicamente il componente fearuresData 
            ))}
          </div>
        </div>
      
    )
}

export default Features