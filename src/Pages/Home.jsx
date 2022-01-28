import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Home = () => {
  return (
    <>
      <div>
        <img src="beers.png" alt="" />
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          exercitationem labore odio natus cum eum qui voluptate sint? Vitae
          sequi similique soluta libero unde corporis expedita alias, incidunt
          recusandae consequatur.
        </p>
      </div>
      <div>
        <img src="random-beer.png" alt="" />
        <h1>
          <Link to="/random-beer">Random Beer</Link>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          exercitationem labore odio natus cum eum qui voluptate sint? Vitae
          sequi similique soluta libero unde corporis expedita alias, incidunt
          recusandae consequatur.
        </p>
      </div>
      <div>
        <img src="new-beer.png" alt="" />
        <h1>
          <Link to="/new-beer">New Beer</Link>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          exercitationem labore odio natus cum eum qui voluptate sint? Vitae
          sequi similique soluta libero unde corporis expedita alias, incidunt
          recusandae consequatur.
        </p>
      </div>
    </>
  );
};

export default Home;
