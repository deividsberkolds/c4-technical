import React from 'react';
import { Link } from 'react-router-dom';

const BeersDetailPage = (props) => {
  const { params: { beerId } } = props.match;
  const beer = props.location.state;
  console.log(props)

  return (
    <div>
      Beers details page ID: <strong>{beerId}</strong>
      <br />
      Beers pH: <strong>{beer.ph}</strong>
      <br />
      Together best with:
      <ul>
          {beer.food_pairing.map((item,index) => <li key={index}><strong>{item}</strong></li>)}
      </ul>
      <br />
      Tips and tricks: <strong>{beer.brewers_tips}</strong>
      <br />
      {/* Tips and tricks: <strong>{beer.method}</strong> */}
      <br />
      <Link to="/">Back</Link>
    </div>
  );
};

export default BeersDetailPage;