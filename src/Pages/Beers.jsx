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
          <div className="beers-div" key={beer._id}>
            <img className="beer-img" src={beer.image_url} alt="" />
            <div className="beers-container-text">
              <h2>
                <Link to={`/${id}`}>{beer.name}</Link>
              </h2>
              <h3>{beer.tagline}</h3>
              <p>
                <strong>Contributed by : </strong>
                {beer.contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
