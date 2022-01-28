import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import Beers from "./Pages/Beers";
import NewBeer from "./Pages/NewBeer";

import Header from "./Components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import SingleBeer from "./Pages/SingleBeer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response);
        setBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        {beers.length === 0 ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beers" element={<Beers beers={beers} />} />
              <Route path="/:id" element={<SingleBeer />} />

              <Route path="/random-beer" element={<SingleBeer />} />
              <Route path="/new-beer" element={<NewBeer />} />
            </Routes>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
