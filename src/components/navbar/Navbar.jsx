import React,{useState} from 'react'
import "./navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/verychain2.jpg";

// BEM -> Block element modifier // sistema di nominazione delle classi


const Menu = () => ( // creo un nuovo componente per creare il menu ad hamburgher e riutilizzare il componente 
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">Cos'è VeryChain</a></p>
    <p><a href="#features">Casi d'uso</a></p>
    <p><a href="#possibility">Notizie</a></p></>
       
)


const Navbar = () => {
    const[toggleMenu,setToggleMenu] = useState(false);
    //toggle menu mostra il menu // settogglemenu ci fa mostrare o sparire il menu

    return ( <div className="gpt3__navbar"> 
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links-logo">
                <img src={logo} alt ="img"></img>
            </div>


            
            <div className="gpt3__navbar-links_container">
               <Menu />
            </div>
                
        </div>
        <div className="gpt3__navbar-sign">
            <p>Accedi</p>
            <button type="button">Registrati</button>
        </div>
        <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Accedi</p>
            <button type="button">Registrati</button>
          </div>
          </div>
        )}

        </div>
        </div>

    );
};

export default Navbar