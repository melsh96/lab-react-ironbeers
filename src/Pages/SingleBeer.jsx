import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBeer = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
        .then(({ data }) => {
          setBeer(data);
        })
        .catch((e) => console.error(e));
    } else {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(({ data }) => {
          setBeer(data);
        })
        .catch((e) => console.error(e));
    }
  }, [id]);

  return (
    <div>
      <div key={beer._id}>
        <img src={beer.image_url} alt="" />
        <p> {beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed by : {beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default SingleBeer;
