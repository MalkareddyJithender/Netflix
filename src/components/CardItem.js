import '../css/CardItem.css';
import React from 'react';

function CardItem({item,category,setShowFeature,setItemFeature}) {
    const url = category === 'series' ? item.posterSmall : `/images/${category}/${item.genre}/${item.slug}/small.jpg`;
    return (
        <div 
         className="card__item"
         onClick={() =>
            {
                setShowFeature(true);
                setItemFeature(item);  
            }}
         >

            <img className="card__image" src={url} alt="movie poster" />
            <div className="card__meta">
                <p className="card__subtitle">{item.title}</p>
                <p className="card__text">{item.description}</p>
            </div>
        </div>
    )
}

export default CardItem;
