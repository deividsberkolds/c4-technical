import React, { useEffect, useState } from "react";
import "./BeersPage.css";
import Card from "../common/Card/Card";

function BeersPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beerData, setBeerData] = useState(null);
  const [filterValue, setFilterValue] = useState(false);

  useEffect(() => {
    if (!beerData) {
      fetch("https://api.punkapi.com/v2/beers")
        .then((res) => res.json())
        .then(
          (result) => {
            setBeerData(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  function filterBeers() {
    setFilterValue(!filterValue);
    setBeerData(
      beerData.filter(
        (beer) => parseInt(beer.first_brewed.split("/")[1]) <= 2010
      )
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      (isLoaded && beerData) &&(
        <>
          <p>Filter beers brewed before or on 2010</p>
          <button onClick={() => filterBeers()}>Filter beers</button>
          <div className="container">
            {beerData.map((beer) => {
              return <Card key={beer.id} beer={beer} />;
            })}
          </div>
        </>
      )
    );
  }
}

export default BeersPage;
