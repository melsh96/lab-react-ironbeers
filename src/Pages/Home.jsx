import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Home = () => {
  return (
    <>
      <div className="home-div">
        <Link to="/beers">
          <img className="beerHomeimg" src="beers.png" alt="" />
        </Link>
        <Link to="/beers">
          <h1>All Beers</h1>
        </Link>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          exercitationem labore odio natus cum eum qui voluptate sint? Vitae
          sequi similique soluta libero unde corporis expedita alias, incidunt
          recusandae consequatur.
        </p>
      </div>
      <div className="home-div">
        <Link to="/random-beer">
          <img className="beerHomeimg" src="random-beer.png" alt="" />
        </Link>
        <Link to="/random-beer">
          <h1>Random Beer</h1>
        </Link>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          exercitationem labore odio natus cum eum qui voluptate sint? Vitae
          sequi similique soluta libero unde corporis expedita alias, incidunt
          recusandae consequatur.
        </p>
      </div>
      <div className="home-div">
        <Link to="/new-beer">
          <img className="beerHomeimg" src="new-beer.png" alt="" />
        </Link>

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
