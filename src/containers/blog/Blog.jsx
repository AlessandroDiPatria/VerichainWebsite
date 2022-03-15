import React from 'react';
import "./blog.css";
import {Article} from "../../components";
import {blog01,
        blog02,
        blog03,
        blog04,
        blog05} from "../blog/imports";

const Blog = () => {
        return ( <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text"> Leggi i nostri articoli a riguardo  <br /> </h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
          
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" text="VeryChain e la blockchain di Ethereum " />
            <Article imgUrl={blog03} date="Sep 26, 2021" text="La blockchain che permette più spazio di archviazione per i tuoi documenti" />
            <Article imgUrl={blog04} date="Sep 26, 2021" text="Scopri VeryChain in un minuto"/>
            <Article imgUrl={blog05} date="Sep 26, 2021" text="Contratti finanziari su VeryChain" />
          </div>
        </div>
      </div>)
        }

export default Blog