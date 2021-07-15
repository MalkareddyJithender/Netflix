import '../css/CardFeature.css';
import React,{useContext} from 'react'
import { featureContext } from './Card';
import Player from './Player';

function CardFeature({ category }) {
    const { showFeature,setShowFeature,itemFeature } = useContext(featureContext);
    const url = category === 'series' ? itemFeature.posterLarge : `/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`;
    return showFeature ? (
        <div 
         className="cardFeature"
         style={{backgroundImage:`url(${url})`}}
         >
            <div 
             className="cardFeature__content">
                <p className="cardFeature__title">{itemFeature.title}</p>
                <p className="cardFeature__description">{ itemFeature.description }</p>
                <button
                onClick={() => setShowFeature(false)}
                className="cardFeature__button"
                >
                    <img src="/images/icons/close.png" alt="close" />
                </button>

                <div className="cardFeature__group">
                    <div className={`cardFeature__maturity ${itemFeature.maturity >= 15 ? 'red':'green' }`} >
                    { itemFeature.maturity}
                    </div>
                    <p>{itemFeature.genre?.charAt(0).toUpperCase() + itemFeature.genre?.slice(1)}</p>
                </div>
                <Player itemFeature={itemFeature} category={category} />
            </div>
        </div>
    )
    :
    null;
};

export default CardFeature;
