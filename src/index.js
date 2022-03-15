import React from "react";
import ReactDom from "react-dom";
import App from "./App"; // dobbiamo andare a creare l'app 
import "./index.css";

ReactDom.render( < App / > , document.getElementById("root")); // si riferisce al div root che sta nel file public/index.html e che è il cuore pulsante della nostra app 
//render sichifica che andremo a renderizzare la nostra app