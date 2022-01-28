import React from "react";
import { Link } from "react-router-dom";

const Beers = (props) => {
  const { beers } = props;
  console.log(beers);
  return (
    <div>
      {beers.map((beer) => {
        const id = String(beer._id);
        console.log(id);
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <Link to={`/${id}`}>{beer.name}</Link>
            <p>{beer.tagline}</p>
            <p>Contributed by : {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
