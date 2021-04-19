import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({ beer }) => {
    return (
        <div className="card-container">
            <img className="picture" src={beer.image_url} alt={beer.name}></img>
            <div className="title">{beer.name}</div>
            <div className="text">{beer.description}</div>
            <Link to={{pathname:`beer/${beer.id}`, state: beer}}>Read more</Link>
        </div>
    )
}

export default Card;